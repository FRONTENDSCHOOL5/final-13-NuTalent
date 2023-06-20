import React, { useState, useRef } from 'react';
import TopUploadNav from '../../components/common/Top/TopUploadNav';
import * as S from './Upload.styled';
import defaultProfileImg from '../../assets/img/basic-profile.svg';
import { instance } from '../../util/api/axiosInstance';
import imageValidation from '../../util/imageValidation';

export default function Upload({ userImg }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const textareaRef = useRef(null);

  // TODO: 토큰 받는 로직 추가
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzZkNzZhYjJjYjIwNTY2MzJjZmZkOCIsImV4cCI6MTY5MjAzNjcwMCwiaWF0IjoxNjg2ODUyNzAwfQ.UVaGzelSUsPykhwO4dw9fSE5A9Hdcy0tueRsAGdv-O0';

  // 텍스트에 따라 textarea의 높이 동적으로 조절
  const textareaHeightControl = () => {
    textareaRef.current.style.height = `${
      textareaRef.current.scrollHeight / 10
    }rem`;
  };

  const contentHanlder = (e) => {
    setContent(e.target.value);
    textareaHeightControl();
  };

  const uploadHanlder = async (e) => {
    const selectedImage = e.target.files[0];

    if (!selectedImage) return;
    if (!imageValidation(selectedImage)) return;

    const formdata = new FormData();
    formdata.append('image', selectedImage);

    const res = await instance.post('/image/uploadfile', formdata);
    const uploadedImage = `${res.config.baseURL}/${res.data.filename}`;
    setImage(uploadedImage);
  };

  const submitHandler = async () => {
    console.log('post');
    try {
      const data = JSON.stringify({
        post: {
          content,
          image,
        },
      });

      const res = await instance.post('/post', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      console.log(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  // TODO: to 속성 설정하기
  return (
    <>
      <TopUploadNav
        size="ms"
        disabled={!(content || image)}
        onClick={submitHandler}
      >
        업로드
      </TopUploadNav>
      <S.Section>
        <S.ProfileImg src={userImg || defaultProfileImg} alt="프로필 이미지" />
        <S.Textarea
          ref={textareaRef}
          placeholder="게시글 입력하기..."
          onChange={contentHanlder}
        ></S.Textarea>
        {image && <S.PostImage src={image} alt="게시글 이미지" />}
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput type="file" id="uploadImg" onChange={uploadHanlder} />
        </div>
      </S.Section>
    </>
  );
}