import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  useAccountNameValid,
  useJoinMember,
} from '../../../hooks/react-query/useAuth';
import { useUploadImage } from '../../../hooks/react-query/useImage';
import {
  JoinMembersWrap,
  PageH2,
  PageDescription,
  ImageWrapper,
  DefaultProfileImg,
  ProfileUploadInput,
  ProfileUploadLabel,
  ProfileUploadDiv,
  TextInputBox,
  JoinMembersNextButton,
  ErrorMessage,
  UserIdValidationMessage,
} from './ProfileSetting.styled';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import profileDefault from '../../../assets/img/basic-profile-img-.svg';
import uploadImage from '../../../assets/img/upload-file.svg';

export default function ProfileSetting() {
  const location = useLocation();
  const [userName, setUserName] = useState('');
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [userAccountName, setUserAccountName] = useState('');
  const [isUserIdValid, setIsUserIdValid] = useState(true);
  const [intro, setIntro] = useState('');
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [userIdErrorMessage, setUserIdErrorMessage] = useState('');
  const [userIdValidationMessage, setUserIdValidationMessage] = useState('');

  const idRegExp = /^[a-zA-Z0-9_.]+$/;

  const { accountNameValidMutate, accountNameValidErrorMessage } =
    useAccountNameValid();
  const { uploadedImage, handleImageChange } = useUploadImage();
  const { JoinMemberMutate } = useJoinMember();

  const handleUserNameBlur = () => {
    // 유효성 검사
    // 사용자 이름 : 2~10자 이내여야합니다.
    if (userName.length < 2 || userName.length > 10) {
      setIsUserNameValid(false);
    } else {
      setIsUserNameValid(true);
    }
  };

  const handleUserIdBlur = async () => {
    // 유효성 검사
    // 계정ID: 영문, 숫자, 특수문자(.), (_)만 사용가능합니다.
    if (!idRegExp.test(userAccountName) || !userAccountName) {
      setIsUserIdValid(false);
      setUserIdErrorMessage(
        '*계정ID는 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
      );
      if (!userAccountName) return;
    } else {
      setIsUserIdValid(true);
    }

    // 서버와 통신해서 계정 검증
    if (!idRegExp.test(userAccountName)) return;
    accountNameValidMutate(userAccountName);

    if (accountNameValidErrorMessage) {
      setUserIdValidationMessage(`${accountNameValidErrorMessage}`);
    } else return;
  };

  // focus를 잃으면 실행
  const handleDescriptionBlur = () => {
    // 유효성 검사
    // 글이 비어있지 않으면 유효성검사 통과
    if (!intro) {
      setIsDescriptionValid(false);
    } else {
      setIsDescriptionValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: userName,
      email: location.state.email,
      password: location.state.password,
      accountname: userAccountName,
      intro: intro,
      image: uploadedImage
        ? uploadedImage
        : 'https://api.mandarin.weniv.co.kr/1687295086842.png',
    };
    JoinMemberMutate(user);
  };

  return (
    <JoinMembersWrap>
      <PageH2>이메일로 회원가입</PageH2>
      <PageDescription>나중에 언제든지 변경할 수 있습니다.</PageDescription>
      <TextInputBox onSubmit={handleSubmit}>
        <ImageWrapper>
          <DefaultProfileImg
            src={uploadedImage ? uploadedImage : profileDefault}
          />
          <ProfileUploadLabel htmlFor="upload-button">
            <ProfileUploadDiv>
              <img src={uploadImage} />
            </ProfileUploadDiv>
          </ProfileUploadLabel>
          <ProfileUploadInput
            type="file"
            id="upload-button"
            onChange={handleImageChange}
          />
        </ImageWrapper>
        <TextActiveInput
          type="text"
          placeholder="2~10자 이내여야 합니다."
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          onBlur={handleUserNameBlur}
        >
          사용자 이름
        </TextActiveInput>
        {!isUserNameValid && (
          <ErrorMessage>*사용자 이름은 2~10자 이내여야 합니다.</ErrorMessage>
        )}
        <TextActiveInput
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          value={userAccountName}
          onChange={(e) => setUserAccountName(e.currentTarget.value)}
          onBlur={handleUserIdBlur}
        >
          계정ID
        </TextActiveInput>
        {!isUserIdValid && <ErrorMessage>{userIdErrorMessage}</ErrorMessage>}
        {
          <UserIdValidationMessage>
            {userIdValidationMessage}
          </UserIdValidationMessage>
        }
        <TextActiveInput
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해주세요!"
          value={intro}
          onChange={(e) => setIntro(e.currentTarget.value)}
          onBlur={handleDescriptionBlur}
        >
          소개
        </TextActiveInput>
        {!isDescriptionValid && (
          <ErrorMessage>*내용을 입력해주세요</ErrorMessage>
        )}
        <JoinMembersNextButton
          type="submit"
          disabled={!isUserIdValid || !isUserNameValid || !isDescriptionValid}
        >
          내 작품을 세상에 소개하러가기
        </JoinMembersNextButton>
      </TextInputBox>
    </JoinMembersWrap>
  );
}
