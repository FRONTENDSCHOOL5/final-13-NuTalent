import { styled } from 'styled-components';
import MainLogo from '../../assets/img/Group-21.svg';

const SplashDiv = styled.div`
  background-color: var(--sub-purple);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10rem;

  & img {
    width: 40rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const IntroLogoBox = styled.div`
  width: 33.4rem;
  height: 23.5rem;
  background-image: url(${MainLogo});
  background-repeat: no-repeat;
  margin: auto;
  margin-top: 1rem;
`;
const CarouselBox = styled.div`
  width: 22rem;
  height: 22rem;
  margin: auto;
  background-size: cover;
  transition: opacity 5s ease-in-out;
`;

export { SplashDiv, IntroLogoBox, CarouselBox };
