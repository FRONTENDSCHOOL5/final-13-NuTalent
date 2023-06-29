import { styled } from 'styled-components';

export const InputEmail = styled.div`
  height: 4.8rem;
  margin-bottom: 1.6rem;

  label {
    display: block;
    height: 50%;
    width: 100%;
    color: #767676;
    font-size: 1.5rem;
  }
  input {
    height: 50%;
    width: 100%;
    border-bottom: #dbdbdb 0.1rem solid;
  }

  input:focus {
    border-bottom: var(--main-purple) 0.1rem solid;
    outline: none;
  }

  ::placeholder {
    color: #d6d6d6;
    font-size: 1.4rem;
  }
`;
