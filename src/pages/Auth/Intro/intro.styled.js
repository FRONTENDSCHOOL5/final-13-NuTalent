import styled from 'styled-components';
import MainLogo from '../../../assets/img/Group-21.svg';
import Kakao from '../../../assets/img/message-circle.svg';
import Google from '../../../assets/img/Google__G__Logo1.svg';
import Facebook from '../../../assets/img/facebook.svg';
import { Link } from 'react-router-dom';

const IntroWrapper = styled.div`
  background-color: var(--sub-purple);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10rem;
`;

const IntroLogoBox = styled.div`
  width: 33.4rem;
  height: 23.5rem;
  background-image: url(${MainLogo});
  background-repeat: no-repeat;
  margin: auto;
`;

const IntroBtnBox = styled.div`
  background-color: white;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const IntroBtn = styled.button`
  cursor: pointer;
  height: 4.4rem;
  border: 0.1rem solid ${({ color }) => color};
  margin: auto 4rem;
  border-radius: 2rem;
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: 1.5rem;
  font-size: 1.3rem;
  color: #767676;
`;

const IntroBtnKakao = styled(IntroBtn)`
  margin-top: 5rem;
  background-image: url(${Kakao});
`;

const IntroBtnGoogle = styled(IntroBtn)`
  background-image: url(${Google});
`;

const IntroBtnFacebook = styled(IntroBtn)`
  margin-bottom: 1rem;
  background-image: url(${Facebook});
`;

const IntroLoginBox = styled.div`
  display: flex;
  margin: 0 auto;
  width: 15.3rem;
  height: 1.5rem;
  margin-bottom: 12rem;
  color: #767676;
`;

const EmailLoginBtn = styled(Link)`
  display: block;
  width: 60%;
  height: 100%;
  padding: 0.2rem;
  padding-left: 1rem;
`;

const JoinBtn = styled(Link)`
  display: block;
  width: 40%;
  height: 100%;

  padding: 0.2rem;
  padding-left: 1.5rem;
  border-left: 1px solid #c4c4c4;
`;

export {
  IntroBtnBox,
  IntroWrapper,
  IntroBtn,
  IntroBtnKakao,
  IntroBtnGoogle,
  IntroBtnFacebook,
  IntroLogoBox,
  IntroLoginBox,
  EmailLoginBtn,
  JoinBtn,
};
