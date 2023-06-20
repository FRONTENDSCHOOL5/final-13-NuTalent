/* eslint-disable */
import { styled } from 'styled-components';
import fileButton from '../../assets/img/upload-file.svg';

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 4.8rem);
  position: relative;
  padding: 3.2rem 1.6rem 2rem 7rem;
  border-top: 0.05rem solid var(--sub-grey);
`;

export const ProfileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  position: absolute;
  top: 2rem;
  left: 1.6rem;
  border-radius: 50%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  font-size: 1.4rem;
  font-family: inherit;
  border: none;
  outline: none;
  padding: 0;
  margin-bottom: 1.6rem;

  &::placeholder {
    color: var(--sub-grey);
  }
`;

export const PostImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  margin-bottom: 1.2rem;
  border-radius: 1rem;
`;

export const FileLabel = styled.label`
  width: 5rem;
  height: 5rem;
  position: fixed;
  bottom: 2rem;
  right: 1.6rem;
  background-image: url(${fileButton});
`;

export const FileInput = styled.input`
  display: none;
`;
