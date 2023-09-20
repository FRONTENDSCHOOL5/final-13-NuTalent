import { styled } from 'styled-components';

export const CommentBox = styled.form`
  width: 100%;
  height: 6.1rem;
  display: flex;
  gap: 1.8rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 1.6rem;
  position: fixed;
  bottom: 0;
  border-top: 0.1rem solid var(--sub-grey);
  background-color: #fff;

  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    object-fit: cover;
  }
  input {
    width: 100%;
    height: 1.8rem;
    &:focus {
      border-bottom: var(--main-purple) 0.1rem solid;
      outline: none;
    }
    &::placeholder {
      color: var(--sub-grey);
    }
  }
  button {
    width: 4.4rem;
    height: 4.4rem;
    text-align: right;
    color: var(--main-purple);

    &:disabled {
      color: var(--sub-grey);
    }
  }
`;
