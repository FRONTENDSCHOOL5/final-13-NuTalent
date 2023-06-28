import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import imageValidation from '../../../util/validation/imageValidation';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import profileDefault from '../../../assets/img/basic-profile-img-.svg';
import { instance } from '../../../util/api/axiosInstance';
import uploadImage from '../../../assets/img/upload-file.svg';

export default function ProfileSetting() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isUserNameInvalid, setIsUserNameInvalid] = useState(false);
  const [userId, setUserId] = useState('');
  const [isUserIdInvalid, setIsUserIdInvalid] = useState(false);
  const [description, setDescription] = useState('');
  const [isDescriptionInvalid, setIsDescriptionInvalid] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [userIdErrorMessage, setUserIdErrorMessage] = useState('');
  const [userIdValidationMessage, setUserIdValidationMessage] = useState('');

  const idRegExp = /^[a-zA-Z0-9_.]+$/;

  const handleUserNameChange = (e) => {
    console.log(e);
    const currentUserName = e.currentTarget.value;
    setUserName(currentUserName);
  };

  const handleUserIdChange = (e) => {
    console.log(e);
    const currentUserId = e.currentTarget.value.trim();
    setUserId(currentUserId);
  };

  const handleDescriptionChange = (e) => {
    console.log(e);
    const currentUserId = e.currentTarget.value;
    setDescription(currentUserId);
  };

  // focus를 잃으면 실행
  const handleUserNameBlur = () => {
    // 유효성 검사
    // 사용자 이름 : 2~10자 이내여야합니다.
    if (userName.length < 2 || userName.length > 10) {
      setIsUserNameInvalid(true);
      console.log(isUserNameInvalid);
    } else {
      setIsUserNameInvalid(false);
      console.log(isUserNameInvalid);
    }
  };

  // focus를 잃으면 실행
  const handleUserIdBlur = async () => {
    // 계정 검증
    try {
      const userAccountName = JSON.stringify({
        user: {
          accountname: userId,
        },
      });
      const res = await instance.post(
        '/user/accountnamevalid',
        userAccountName,
        {
          headers: {
            'Content-type': 'application/json',
          },
        },
      );

      console.log('res', res);

      setUserIdValidationMessage(`${res.data.message}`);
    } catch (error) {
      console.error(error);
      alert('잘못된 접근입니다.');
    }
    // 유효성 검사
    // 계정ID: 영문, 숫자, 특수문자(.), (_)만 사용가능합니다.
    if (!idRegExp.test(userId)) {
      setIsUserIdInvalid(true);
      setUserIdErrorMessage(
        '*계정ID는 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
      );
      console.log(isUserIdInvalid);
    } else {
      setIsUserIdInvalid(false);
      console.log(isUserIdInvalid);
    }
  };

  // focus를 잃으면 실행
  const handleDescriptionBlur = () => {
    // 유효성 검사
    // 소개: 글이 비어있지 않으면 유효성검사 통과
    if (!description) {
      setIsDescriptionInvalid(true);
      console.log(isDescriptionInvalid);
    } else {
      setIsDescriptionInvalid(false);
      console.log(isDescriptionInvalid);
    }
  };

  const handleUpload = async (e) => {
    console.log(e.target.files[0]);
    const selectedImage = e.target.files[0];

    if (!selectedImage) {
      console.log('선택이미지없음');
      return;
    }
    if (!imageValidation(selectedImage)) {
      console.log('validation안됨');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    const res = await instance.post('/image/uploadfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(res);

    const uploadImage = `${res.config.baseURL}/${res.data.filename}`;
    console.log('uploadImage', uploadImage);
    setProfileImage(uploadImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hi');

    try {
      const user = JSON.stringify({
        user: {
          username: userName,
          email: location.state.email,
          password: location.state.password,
          accountname: userId,
          intro: description,
          image: profileImage
            ? profileImage
            : 'https://api.mandarin.weniv.co.kr/1687295086842.png',
        },
      });
      const res = await instance.post('/user', user, {
        headers: { 'Content-type': 'application/json' },
      });

      console.log(res);

      alert('회원가입에 성공하였습니다!');

      navigate('/login');
    } catch (error) {
      console.error(error);

      setIsUserIdInvalid(true);
      setUserIdErrorMessage(`*${error.response.data.message}`);
    }
  };

  return (
    <JoinMembersWrap>
      <PageH2>이메일로 회원가입</PageH2>
      <PageDescription>나중에 언제든지 변경할 수 있습니다.</PageDescription>
      <TextInputBox onSubmit={handleSubmit}>
        <ImageWrapper>
          <DefaultProfileImg
            src={profileImage ? profileImage : profileDefault}
          />
          <ProfileUploadLabel htmlFor="upload-button">
            <ProfileUploadDiv>
              <img src={uploadImage} />
            </ProfileUploadDiv>
          </ProfileUploadLabel>
          <ProfileUploadInput
            type="file"
            id="upload-button"
            onChange={handleUpload}
          />
        </ImageWrapper>
        <TextActiveInput
          type="text"
          placeholder="2~10자 이내여야 합니다."
          value={userName}
          onChange={handleUserNameChange}
          onBlur={handleUserNameBlur}
        >
          사용자 이름
        </TextActiveInput>
        {isUserNameInvalid && (
          <ErrorMessage>*사용자 이름은 2~10자 이내여야 합니다.</ErrorMessage>
        )}
        <TextActiveInput
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          value={userId}
          onChange={handleUserIdChange}
          onBlur={handleUserIdBlur}
        >
          계정ID
        </TextActiveInput>
        {isUserIdInvalid && <ErrorMessage>{userIdErrorMessage}</ErrorMessage>}
        {
          <UserIdValidationMessage>
            {userIdValidationMessage}
          </UserIdValidationMessage>
        }
        <TextActiveInput
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해주세요!"
          value={description}
          onChange={handleDescriptionChange}
          onBlur={handleDescriptionBlur}
        >
          소개
        </TextActiveInput>
        {isDescriptionInvalid && (
          <ErrorMessage>*내용을 입력해주세요</ErrorMessage>
        )}
        <JoinMembersNextButton
          type="submit"
          disabled={
            isUserIdInvalid || isUserNameInvalid || isDescriptionInvalid
          }
        >
          내 작품을 세상에 소개하러가기
        </JoinMembersNextButton>
      </TextInputBox>
    </JoinMembersWrap>
  );
}
