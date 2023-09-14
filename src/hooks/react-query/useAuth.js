import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { instance } from '../../util/api/axiosInstance';
import { useNavigate } from "react-router-dom";
import { recoilData } from "../../recoil/atoms/dataState";
import { useSetRecoilState } from "recoil";

const accountNameValid = async (accountName) => {
    const userAccountName = JSON.stringify({
        user: { accountname: accountName, }
    })
    const data = await instance.post(`/user/accountnamevalid`, userAccountName);
    return data;
};

const joinMember = async (user) => {
    const userToJoin = JSON.stringify({
        user: {
            username: user.username,
            email: user.email,
            password: user.password,
            accountname: user.accountname,
            intro: user.intro,
            userimage: user.image,
        }
    });
    const data = await instance.post('/user', userToJoin);

    return data;
}

const login = async ({ email, password }) => {
    const userToLogin = JSON.stringify({
        user: {
            email: email,
            password: password,
        }
    });

    const data = await instance.post('/user/login', userToLogin);

    return data;
}

export const useAccountNameValid = () => {
    const [accountNameValidErrorMessage, setaccountNameValidErrorMessage] = useState('');

    const { mutate: accountNameValidMutate } = useMutation({
        mutationFn: (accountName) => accountNameValid(accountName),
        onSuccess: (res) => {
            // TODO: alert창을 추후 디자인 된 알림창으로 변경 필요
            alert(`${res.data.message}`);
        },
        onError: (err) => {
            setaccountNameValidErrorMessage(err.message);
        }
    })
    return { accountNameValidMutate, accountNameValidErrorMessage };
};

export const useJoinMember = () => {
    const navigate = useNavigate();

    const { mutate: JoinMemberMutate } = useMutation({
        mutationFn: (user) => joinMember(user),
        onSuccess: () => {
            alert('회원가입에 성공하였습니다!');
            navigate('/login');
        },
        onError: (err) => {
            console.error(err);
        }
    })
    return { JoinMemberMutate };
}

export const useLogin = () => {
    const setCurrentUserData = useSetRecoilState(recoilData);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const { mutate: loginMutate } = useMutation({
        mutationFn: (email, password) => login(email, password),
        onSuccess: (res) => {
            if (!res.data.message) {
                setCurrentUserData(res.data.user);
                navigate('/home');
            } else {
                setMessage(res.data.message);
            }
        },
        onError: (err) => {
            console.error(err);
        }

    })

    return { loginMutate, message };

}