import styled, { css } from 'styled-components';

const sizes = {
  l: css`
    width: 100%;
    height: 4.4rem;
    border-radius: 4.4rem;
  `,
  m: css`
    width: 12rem;
    height: 3.4rem;
    border-radius: 3rem;
  `,
  ms: css`
    width: 9rem;
    height: 3.2rem;
    border-radius: 3.2rem;
  `,
  s: css`
    width: 5.6rem;
    height: 2.8rem;
    border-radius: 2.6rem;
    font-size: 1.2rem;
  `,
};

const Button = styled.button`
  font-size: 1.4rem;
  background-color: var(--main-purple);
  color: white;
  cursor: pointer;

  ${(props) => sizes[props.size || 'l']}

  &:disabled {
    background: #ffffff;
    border: 0.1rem solid var(--main-purple);
    color: var(--main-purple);
  }
`;

export default Button;
