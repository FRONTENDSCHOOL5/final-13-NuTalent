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
    } catch (error) {
      console.error(error);

      // TODO: email, password가 입력되지 않거나 일치하지 않을 때 input 하단에 알림문구 띄우기 작업 필요
      console.log(error.response.data);
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
          onChange={(e) => setEmail(e.target.value)}
        >
          이메일
        </TextActiveInput>
        <TextActiveInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          비밀번호
        </TextActiveInput>
        <StyleLBtn type="submit">로그인</StyleLBtn>
      </TextInputBox>
      <LoginCreateAccount href="#">이메일로 회원가입</LoginCreateAccount>
    </LoginPageWrap>
  );
}
