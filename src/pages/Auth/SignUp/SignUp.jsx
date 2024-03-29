import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import StyledBtn from '../../../components/common/Button/Button';
// import { instance } from '../../../util/api/axiosInstance';
import useSignUp from '../../../../src/hooks/react-query/useSignUp';
import {
  JoinMembersWrap,
  PageH2,
  TextInputBox,
  ErrorMessage,
} from './SignUp.styled';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [emailResponseMessage, setEmailResponseMessage] = useState('');
  const [passwordResponseMessage, setPasswordResponseMessage] = useState('');
  const signUpMutation = useSignUp();
  const navigate = useNavigate();
  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;

  const validateEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (emailPattern.test(email)) {
      setIsEmailError(false);
      setEmailResponseMessage('');
    } else {
      setIsEmailError(true);
      setEmailResponseMessage('*이메일 형식이 맞지 않습니다.');
    }
  };

  const validatePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    if (password.length < 6) {
      setIsPasswordError(true);
      setPasswordResponseMessage('*비밀번호는 6자 이상이어야 합니다.');
    } else {
      setIsPasswordError(false);
      setPasswordResponseMessage('');
    }
  };

  const handleSubmit = async () => {
    if (isEmailError || isPasswordError) return;

    try {
      const res = await signUpMutation.mutateAsync({ email });

      if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
        setIsEmailError(true);
        setEmailResponseMessage(`*${res.data.message}`);
      } else {
        console.log('이메일 중복 여부 통신 성공');
        navigate('/signUp/profile', {
          state: {
            email: email,
            password: password,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <JoinMembersWrap>
      <PageH2>이메일로 회원가입</PageH2>
      <TextInputBox>
        <TextActiveInput
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={validateEmail}
        >
          이메일
        </TextActiveInput>
        {/* emailResponseMessage 들어가는 값: res.data.message */}
        {isEmailError && <ErrorMessage>{emailResponseMessage}</ErrorMessage>}
        <TextActiveInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={validatePassword}
        >
          비밀번호
        </TextActiveInput>
        {isPasswordError && (
          <ErrorMessage>{passwordResponseMessage}</ErrorMessage>
        )}
      </TextInputBox>
      <StyledBtn
        // to="/signUp/profile"
        onClick={handleSubmit}
        disabled={isEmailError || isPasswordError}
      >
        다음
      </StyledBtn>
    </JoinMembersWrap>
  );
}
