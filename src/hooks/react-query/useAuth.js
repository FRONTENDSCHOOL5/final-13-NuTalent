import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { instance } from '../../util/api/axiosInstance';
import { useNavigate } from "react-router-dom";

const accountNameValid = async (accountName) => {
    console.log(accountName);
    const userAccountName = JSON.stringify({
        user: { accountname: accountName, }
    })
    console.log('userAccountName', userAccountName)
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
    })
    const data = await instance.post('/user', userToJoin);

    console.log('지나갑니다.')

    return data;
}

export const useAccountNameValid = () => {
    const [accountNameValidErrorMessage, setaccountNameValidErrorMessage] = useState('');

    const { mutate: accountNameValidMutate } = useMutation({
        mutationFn: (accountName) => accountNameValid(accountName),
        onSuccess: (res) => {
            console.log(res);
            // alert('사용 가능한 계정ID입니다 :)')
        },
        onError: (err) => {
            console.error(err)
            setaccountNameValidErrorMessage(err.message);
        }
    })
    return { accountNameValidMutate, accountNameValidErrorMessage };
};

export const useJoinMember = () => {
    const navigate = useNavigate();

    const { mutate: JoinMemberMutate } = useMutation({
        mutationFn: (user) => joinMember(user),
        onSuccess: (res) => {
            console.log(res);
            alert('회원가입에 성공하였습니다!');
            navigate('/login');
        },
        onError: (err) => {
            console.error(err);
        }
    })
    return { JoinMemberMutate };
}