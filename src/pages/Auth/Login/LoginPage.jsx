import React from 'react';
import TextActiveInput from '../components/common/TextActiveInput/TextActiveInput';
import { StyleLBtn } from '../components/common/Button/LButton';
import {
  LoginPageWrap,
  PageH2,
  TextInputBox,
  LoginCreateAccount,
} from './LoginPage.styled';

export default function LoginPage() {
  return (
    <LoginPageWrap>
      <PageH2>로그인</PageH2>
      <TextInputBox>
        <TextActiveInput type="email">이메일</TextActiveInput>
        <TextActiveInput type="password">비밀번호</TextActiveInput>
      </TextInputBox>
      <StyleLBtn>로그인</StyleLBtn>
      <LoginCreateAccount href="#">이메일로 회원가입</LoginCreateAccount>
    </LoginPageWrap>
  );
}
