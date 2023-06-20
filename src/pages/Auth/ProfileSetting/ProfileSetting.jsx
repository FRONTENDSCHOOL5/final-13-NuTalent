import React, { useState } from 'react';
import {
  JoinMembersWrap,
  PageH2,
  PageDescription,
  ImageWrapper,
  DefaultProfileImg,
  ProfileUploadImg,
  TextInputBox,
  JoinMembersNextButton,
  // ErrorMessage,
} from './ProfileSetting.styled';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import profileDefault from '../../../assets/img/basic-profile-img-.svg';
import profileUpload from '../../../assets/img/upload-file.svg';

export default function ProfileSetting() {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [description, setDescription] = useState('');

  const handleUserNameChange = (e) => {
    console.log(e.current.value);
    setUserName(e.current.value);
  };

  const handleUserIdChange = (e) => {
    console.log(e.current.value);
    setUserId(e.current.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.current.value);
  };

  return (
    <JoinMembersWrap>
      <PageH2>이메일로 회원가입</PageH2>
      <PageDescription>나중에 언제든지 변경할 수 있습니다.</PageDescription>
      <ImageWrapper>
        <DefaultProfileImg src={profileDefault} />
        <ProfileUploadImg src={profileUpload} />
      </ImageWrapper>
      <TextInputBox>
        <TextActiveInput
          type="text"
          placeholder="2~10자 이내여야 합니다."
          value={userName}
          onChange={handleUserNameChange}
        >
          사용자 이름
        </TextActiveInput>
        {/* {emailResponseMessage && (
            <ErrorMessage>{emailResponseMessage}</ErrorMessage>
          )} */}
        <TextActiveInput
          type="text"
          placeholder="영문, 숫자, 특수문자(.), (_)만 사용 가능합니다."
          value={userId}
          onChange={handleUserIdChange}
        >
          계정ID
        </TextActiveInput>
        {/* {isPasswordError && (
            <ErrorMessage>비밀번호는 6자 이상이어야 합니다.</ErrorMessage>
          )} */}
        <TextActiveInput
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해주세요!"
          value={description}
          onChange={handleDescriptionChange}
        >
          소개
        </TextActiveInput>
        <JoinMembersNextButton>
          내 작품을 세상에 소개하러가기
        </JoinMembersNextButton>
      </TextInputBox>

      {/* <StyledBtn
        onClick={handleSubmit}
        disabled={isPasswordError || emailResponseMessage}
      >
        다음
      </StyledBtn> */}
    </JoinMembersWrap>
  );
}
