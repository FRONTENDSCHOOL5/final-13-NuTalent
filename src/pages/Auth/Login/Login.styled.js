import { styled } from 'styled-components';

const LoginPageWrap = styled.div`
  margin: 5.4rem 3.4rem;
`;
const PageH2 = styled.h2`
  font-size: 2.4rem;
  text-align: center;
`;

const TextInputBox = styled.form`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const LoginCreateAccount = styled.a`
  display: block;
  margin-top: 20px;
  color: #767676;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: #eb5757;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

export {
  LoginPageWrap,
  PageH2,
  TextInputBox,
  LoginCreateAccount,
  ErrorMessage,
};
