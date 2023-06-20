import { Link } from 'react-router-dom';
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


const StyledBtn = css`
  font-size: 1.4rem;
  background-color: var(--main-purple);
  color: white;
  cursor: pointer;

  ${(props) => sizes[props.size || 'l']}

  ${(props) => props.width && `width: ${props.width};`}


  &:disabled {
    background: #ffffff;
    border: 0.1rem solid var(--main-purple);
    color: var(--main-purple);
  }
`;


export const StyledButton = styled.button`
  ${StyledBtn}
`
export const StyledLink = styled(Link)`
  ${StyledBtn}
`

