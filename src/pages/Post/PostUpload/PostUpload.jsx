import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopUploadNav from '../../../components/common/Top/TopUploadNav';
import imageValidation from '../../../util/imageValidation';
import { instance } from '../../../util/api/axiosInstance';
import { loginState } from '../../../recoil/atoms/loginState';

import * as S from './PostUpload.styled';
import defaultProfileImg from '../../../assets/img/basic-profile-img-.svg';

export default function Upload({ userImg }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const textareaRef = useRef(null);
  const token = useRecoilValue(loginState);

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

      navigate(`/post/${res.data.post.id}`);
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

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
