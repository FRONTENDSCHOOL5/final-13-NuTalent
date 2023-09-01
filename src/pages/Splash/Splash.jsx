import React, { useEffect, useState } from 'react';
// import splash from '../../assets/img/SplashImg.png';
import people1 from '../../assets/img/peo1.png';
import people2 from '../../assets/img/peo2.png';
import people3 from '../../assets/img/peo3.png';
import people4 from '../../assets/img/peo4.png';
import people5 from '../../assets/img/peo5.png';
import people6 from '../../assets/img/peo6.png';

// import people6 from '../../assets/img/people9.png';

import { SplashDiv, IntroLogoBox, CarouselBox } from './Splash.styled';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();
  const peopleImg = [people1, people2, people3, people4, people5, people6];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const ImgChangeTimer = setInterval(() => {
      // 인덱스 값을 하나씩 증가시키되, 이미지 배열의 마지막 인덱스에 도달할 경우 그 갯수 +1이 되지 않도록 하기 위해서 나머지 연산자를 사용하여 다시 0으로 돌아가도록 설정
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % peopleImg.length);
    }, 200);
    return () => {
      // 컴포넌트가 언마운트되면 타이머 제거
      clearInterval(ImgChangeTimer);
    };
  }, []);

  useEffect(() => {
    setTimeout(function () {
      // TODO: 부드러운 화면전환이 필요합니다...
      navigate('/intro');
    }, 2000);
  }, []);
  return (
    <>
      <SplashDiv>
        {/* TODO: 로고가 움직이게 할수 있으면 좋을 것 같습니다. */}
        <IntroLogoBox />
        <CarouselBox
          style={{ backgroundImage: `url(${peopleImg[currentImgIndex]})` }}
        />
      </SplashDiv>
    </>
  );
}
