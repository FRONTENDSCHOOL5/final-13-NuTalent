import React, { useState } from 'react';
import TextActiveInput from '../../components/common/TextActiveInput/TextActiveInput';
import { StyleLBtn } from '../../components/common/Button/LButton';
import {
  LoginPageWrap,
  PageH2,
  TextInputBox,
  LoginCreateAccount,
} from './LoginPage.styled';
import { instance } from '../../util/api/axiosInstance';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAlertMessage, setEmailAlertMessage] = useState('');
  const [passwordAlertMessage, setPasswordAlertMessage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const emailRegEx = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value == '') {
      setIsPasswordValid(false);
      setPasswordAlertMessage('*비밀번호를 입력해주세요.');
    } else if (password.length < 6) {
      setIsPasswordValid(false);
      setPasswordAlertMessage('*비밀번호는 6자 이상이어야 합니다.');
    } else {
      setIsPasswordValid(true);
      setPasswordAlertMessage('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setIsEmailValid(false);
      setEmailAlertMessage('*이메일을 입력해주세요');
    } else if (!emailRegEx.test(email)) {
      setIsEmailValid(false);
      setEmailAlertMessage('*유효하지 않은 이메일입니다.');
    } else {
      setIsEmailValid(true);
      setEmailAlertMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      });

      // 비동기 통신
      const res = await instance.post('/user/login', user, {
        headers: { 'Content-type': 'application/json' },
      });
      console.log(res);

      //localStorage 저장
      const token = res.data.user['token'];
      localStorage.setItem('token', token);

        console.log('로그인 성공!');
      } else {
        setPasswordAlertMessage(`*${res.data.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginPageWrap>
      <PageH2>로그인</PageH2>
      <TextInputBox onSubmit={handleSubmit}>
        <TextActiveInput
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleEmailChange}
        >
          이메일
        </TextActiveInput>
        <TextActiveInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePasswordChange}
        >
          비밀번호
        </TextActiveInput>
        {passwordAlertMessage && (
          <ErrorMessage>{passwordAlertMessage}</ErrorMessage>
        )}
        <StyleLBtn
          type="submit"
          // TODO: disabled 일 때 버튼 색 연하게/진하게 변경할 것
          disabled={isEmailValid && isPasswordValid}
        >
          로그인
        </StyleLBtn>
      </TextInputBox>
      <LoginCreateAccount href="#">이메일로 회원가입</LoginCreateAccount>
    </LoginPageWrap>
  );
}
