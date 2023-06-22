import { styled } from 'styled-components';

const ProfileEditWrap = styled.div`
  margin: 3rem 3.4rem;
  padding-top: 4.8rem;
`;

const ImageWrapper = styled.div`
  width: 11rem;
  height: 11rem;
  margin: 3rem auto;
`;

const DefaultProfileImg = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const ProfileUploadInput = styled.input`
  display: none;
`;

const ProfileUploadLabel = styled.label`
  width: 3.6rem;
  height: 3.6rem;
  position: absolute;
  transform: translate(-100%, 200%);
`;

const ProfileUploadDiv = styled.div`
  cursor: pointer;
  position: absolute;

  & > img {
    position: absolute;
    width: 3.6rem;
    height: 3.6rem;
  }
`;

const TextInputBox = styled.form`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const ErrorMessage = styled.p`
  color: #eb5757;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

export { ProfileEditWrap, ImageWrapper, DefaultProfileImg, ProfileUploadInput, ProfileUploadLabel, ProfileUploadDiv, TextInputBox, ErrorMessage };
