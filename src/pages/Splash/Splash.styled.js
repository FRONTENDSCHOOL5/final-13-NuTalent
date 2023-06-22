import { styled } from 'styled-components';

const SplashDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--sub-purple);

  & img {
    width: 40rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { SplashDiv }