import React from 'react';
import splash from '../../assets/img/Splash-문구.svg';
import { SplashDiv } from './Splash.styled';

export default function Splash() {
  return (
    <>
      <SplashDiv>
        {/* TODO: 로고가 움직이게 할수 있으면 좋을 것 같습니다. */}
        <img src={splash} />
      </SplashDiv>
    </>
  );
}
