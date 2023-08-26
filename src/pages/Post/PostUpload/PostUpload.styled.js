import { styled } from 'styled-components';
import fileButton from '../../../assets/img/upload-file.svg';
import xbtn from '../../../assets/img/x.svg';

export const TagBarContainer = styled.div`
  margin-top: 4.8rem;
`;

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 8.8rem);
  position: relative;
  padding: 3.2rem 1.6rem 2rem 7rem;
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
export const imgLayout = styled.div`
  position: relative;
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
export const Deletebtn = styled.button`
  position: absolute;
  top: 9px;
  right: 9px;
  width: 22px;
  height: 22px;
  background: url(${xbtn}) 0 0 / cover;
`;
