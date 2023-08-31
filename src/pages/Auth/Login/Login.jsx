import React, { useState } from 'react';
import { useLogin } from '../../../hooks/react-query/useAuth';

import {
  LoginPageWrap,
  PageH2,
  TextInputBox,
  LoginCreateAccount,
  ErrorMessage,
} from './Login.styled';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import StyledBtn from '../../../components/common/Button/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAlertMessage, setEmailAlertMessage] = useState('');
  const [passwordAlertMessage, setPasswordAlertMessage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegEx = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;

  const { loginMutate, message } = useLogin();

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());

    // 이메일 유효성 검사
    if (email === '') {
      setIsEmailValid(false);
      setEmailAlertMessage('*이메일을 입력해주세요');
    } else {
      passwordAlertMessage !== ''
        ? setIsPasswordValid(true)
        : setIsPasswordValid(false);
      setIsEmailValid(true);
      setEmailAlertMessage('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());

    // 패스워드 유효성 검사
    if (password.length < 1) {
      setIsPasswordValid(false);
      setPasswordAlertMessage('*비밀번호를 입력해주세요.');
    } else {
      setIsPasswordValid(true);
      setPasswordAlertMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 이메일 유효성 검사
    if (!emailRegEx.test(email)) {
      setIsEmailValid(false);
      setEmailAlertMessage('*유효하지 않은 이메일입니다.');
    } else {
      setIsEmailValid(true);
      setEmailAlertMessage('');
    }

    // 패스워드 유효성 검사
    if (password.length < 6) {
      setIsPasswordValid(false);
      setPasswordAlertMessage('*비밀번호는 6자 이상이어야 합니다.');
    } else {
      setIsPasswordValid(true);
      setPasswordAlertMessage('');
    }

    if (!isEmailValid || !isPasswordValid) return;

    loginMutate({ email, password });

    if (message) {
      setIsPasswordValid(false);
      password.length < 6
        ? setPasswordAlertMessage(`*비밀번호는 6자 이상이어야 합니다.`)
        : setPasswordAlertMessage(`*${message}`);
    }
  };

  return (
    <LoginPageWrap>
      <PageH2>로그인</PageH2>
      <TextInputBox onSubmit={handleSubmit}>
        <TextActiveInput
          // type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleEmailChange}
        >
          이메일
        </TextActiveInput>
        {!isEmailValid && <ErrorMessage>{emailAlertMessage}</ErrorMessage>}
        <TextActiveInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePasswordChange}
        >
          비밀번호
        </TextActiveInput>
        {!isPasswordValid && (
          <ErrorMessage>{passwordAlertMessage}</ErrorMessage>
        )}
        {/* {isPasswordInvalid && (
          <ErrorMessage>{responseAlertMessage}</ErrorMessage>
        )} */}
        <StyledBtn type="submit" disabled={!isEmailValid || !isPasswordValid}>
          로그인
        </StyledBtn>
      </TextInputBox>
      <LoginCreateAccount to="/signUp">이메일로 회원가입</LoginCreateAccount>
    </LoginPageWrap>
  );
}
