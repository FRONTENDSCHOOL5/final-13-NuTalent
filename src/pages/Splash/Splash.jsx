import React, { useEffect } from 'react';
import splash from '../../assets/img/SplashImg.png';
import { SplashDiv } from './Splash.styled';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      // TODO: 부드러운 화면전환이 필요합니다...
      navigate('/intro');
    }, 3000);
  }, []);
  return (
    <>
      <SplashDiv>
        {/* TODO: 로고가 움직이게 할수 있으면 좋을 것 같습니다. */}
        <img src={splash} />
      </SplashDiv>
    </>
  );
}
