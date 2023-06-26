import { styled } from 'styled-components';
import fileButton from '../../../assets/img/img-button.svg';

export const Container = styled.div`
  padding: 6.8rem 1.6rem;
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
`;

// chat area
export const ChatArticle = styled.article`
  align-self: flex-start;
  display: flex;
  gap: 1.2rem;

  & > img {
    display: inline-block;
    flex-basis: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  & > p {
    flex-grow: 1;
    padding: 1.2rem;
    max-width: 24rem;
    background-color: #fff;
    border: 0.1rem solid #c4c4c4;
    border-radius: 0 1rem 1rem 1rem;
    font-size: 1.4rem;
    line-height: 1.3;
  }

  &.me {
    align-self: flex-end;
    & > p {
      background-color: var(--main-purple);
      color: #fff;
      border: none;
      border-radius: 1rem 0 1rem 1rem;
    }
  }
`;

// send area
export const ChatForm = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6.1rem;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.8rem;
  background-color: #fff;
`;

export const FileLabel = styled.label`
  width: 3.6rem;
  height: 3.6rem;
  background-image: url(${fileButton});
`;

export const FileInput = styled.input`
  display: none;
`;

export const TextInput = styled.input`
  flex-grow: 1;
  font-size: 1.4rem;

  &::placeholder {
    color: #c4c4c4;
  }
`;

export const SendButton = styled.button`
  font-size: 1.4rem;

  &:disabled {
    color: #c4c4c4;
  }
`;
