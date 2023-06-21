import React from 'react';
// import { instance } from '../../../util/api/axiosInstance';
import {
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
// import StyledBtn from '../../../components/common/Button/Button';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
// import profileDefault from '../../../assets/img/basic-profile-img-.svg';
import uploadImage from '../../../assets/img/upload-file.svg';

export default function ProfileEdit() {
  return (
    <>
      <TopBasicNav />
      <JoinMembersWrap>
        <TextInputBox
        // onSubmit={handleSubmit}
        >
          <ImageWrapper>
            <DefaultProfileImg
              src=""
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
            // value={userName}
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
            // value={userId}
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
            // value={description}
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
