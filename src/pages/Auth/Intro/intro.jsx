import React from 'react';

import {
  IntroBtnBox,
  IntroWrapper,
  IntroBtnLogin,
  IntroLogoBox,
  IntroBtnSignUp,
} from './intro.styled';

export default function Intro() {
  return (
    <>
      <IntroWrapper>
        <IntroLogoBox></IntroLogoBox>
        <IntroBtnBox>
          <IntroBtnLogin to="/login" color="#8232AC">
            로그인
          </IntroBtnLogin>
          <IntroBtnSignUp to="/signUp" color="#8232AC">
            회원가입
          </IntroBtnSignUp>
        </IntroBtnBox>
      </IntroWrapper>
    </>
  );
}
