import React, { useState, useEffect } from 'react';
import { instance } from '../../../util/api/axiosInstance';
import {
  // ProfileEditWrap,
  JoinMembersWrap,
  // PageH2,
  // PageDescription,
  ImageWrapper,
  DefaultProfileImg,
  ProfileUploadInput,
  ProfileUploadLabel,
  ProfileUploadDiv,
  JoinMembersNextButton,
  TextInputBox,
  // ErrorMessage,
} from './ProfileEdit.styled';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import TopUploadNav from '../../../components/common/Top/TopUploadNav';
// import StyledBtn from '../../../components/common/Button/Button';
// import profileDefault from '../../../assets/img/basic-profile-img-.svg';
import uploadImage from '../../../assets/img/upload-file.svg';

export default function ProfileEdit() {
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [description, setDescription] = useState('');

  const dummyUserId = process.env.REACT_APP_USER_ID;
  const dummyUserToken = process.env.REACT_APP_USER_TOKEN;

  useEffect(() => {
    async function getProfile() {
      const getProfileRes = await instance.get(
        // TODO: id 동적으로 값을 받아오도록 변경 필요
        `/profile/${dummyUserId}`,
        {
          params: {
            image: profileImage,
            userName: userName,
            userId: userId,
            description: description,
          },
          headers: {
            // TODO: token값 동적으로 받아오도록 변경 필요
            Authorization: `Bearer ${dummyUserToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(getProfileRes);

      setProfileImage(getProfileRes.data.profile.image);
      setUserName(getProfileRes.data.profile.username);
      setUserId(getProfileRes.data.profile.accountname);
      setDescription(getProfileRes.data.profile.intro);
    }

    getProfile();
  }, []);
  return (
    <>
      <TopUploadNav />
      <JoinMembersWrap>
        <TextInputBox
        // onSubmit={handleSubmit}
        >
          <ImageWrapper>
            <DefaultProfileImg
              src={profileImage}
              // src={profileImage ? profileImage : profileDefault}
            />
            <ProfileUploadLabel htmlFor="upload-button">
              <ProfileUploadDiv>
                <img src={uploadImage} />
              </ProfileUploadDiv>
            </ProfileUploadLabel>
            <ProfileUploadInput
              type="file"
              className="user-profile"
              id="upload-button"
              // onChange={handleUpload}
            />
          </ImageWrapper>
          <TextActiveInput
            type="text"
            className="user-name"
            // placeholder="2~10자 이내여야 합니다."
            value={userName}
            // onChange={handleUserNameChange}
            // onBlur={handleUserNameBlur}
          >
            사용자 이름
          </TextActiveInput>
          {/* {isUserNameInvalid && (
          <ErrorMessage>*사용자 이름은 2~10자 이내여야 합니다.</ErrorMessage>
        )} */}
          <TextActiveInput
            type="text"
            className="user-id"
            // placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            value={userId}
            // onChange={handleUserIdChange}
            // onBlur={handleUserIdBlur}
          >
            계정ID
          </TextActiveInput>
          {/* {isUserIdInvalid && <ErrorMessage>{userIdErrorMessage}</ErrorMessage>} */}
          <TextActiveInput
            type="text"
            className="user-description"
            // placeholder="자신과 판매할 상품에 대해 소개해주세요!"
            value={description}
            // onChange={handleDescriptionChange}
            // onBlur={handleDescriptionBlur}
          >
            소개
          </TextActiveInput>
          {/* {isDescriptionInvalid && (
          <ErrorMessage>*내용을 입력해주세요</ErrorMessage>
        )} */}
          <JoinMembersNextButton
            type="submit"
            // disabled={
            //   isUserIdInvalid || isUserNameInvalid || isDescriptionInvalid
            // }
          >
            내 작품을 세상에 소개하러가기
          </JoinMembersNextButton>
        </TextInputBox>
      </JoinMembersWrap>
    </>
  );
}
