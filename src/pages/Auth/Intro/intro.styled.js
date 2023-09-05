import styled from 'styled-components';
import MainLogo from '../../../assets/img/Group-21.svg';
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

const IntroBtnLogin = styled(Link)`
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
  margin-top: 5rem;
  &:hover {
    font-weight: 900;
    font-size: 1.4rem;
    color: ${({ color }) => color};
  }
`;

const IntroBtnSignUp = styled(IntroBtnLogin)`
  margin-top: 0;
  margin-bottom: 4.5rem;
`;

export {
  IntroBtnBox,
  IntroWrapper,
  IntroBtnLogin,
  IntroBtnSignUp,
  IntroLogoBox,
};
