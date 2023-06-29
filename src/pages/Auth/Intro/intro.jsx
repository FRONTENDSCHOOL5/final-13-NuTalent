import React from 'react';

import {
  IntroBtnBox,
  IntroWrapper,
  IntroBtnKakao,
  IntroLogoBox,
  IntroBtnGoogle,
  IntroBtnFacebook,
  IntroLoginBox,
  EmailLoginBtn,
  JoinBtn,
} from './intro.styled';

export default function Intro() {
  return (
    <>
      <IntroWrapper>
        <IntroLogoBox></IntroLogoBox>
        <IntroBtnBox>
          <IntroBtnKakao color="#F2C94C">
            카카오톡 계정으로 로그인
          </IntroBtnKakao>
          <IntroBtnGoogle color="#767676">구글 계정으로 로그인</IntroBtnGoogle>
          <IntroBtnFacebook color="#2D9CDB">
            페이스북 계정으로 로그인
          </IntroBtnFacebook>
          <IntroLoginBox>
            <EmailLoginBtn to="/login">이메일로 로그인</EmailLoginBtn>
            <JoinBtn to="/signUp">회원가입</JoinBtn>
          </IntroLoginBox>
        </IntroBtnBox>
      </IntroWrapper>
    </>
  );
}
