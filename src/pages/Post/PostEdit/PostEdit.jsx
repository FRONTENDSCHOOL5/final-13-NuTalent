import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopUploadNav from '../../../components/common/Top/TopUploadNav';

import imageValidation from '../../../util/validation/imageValidation';
import { instance } from '../../../util/api/axiosInstance';
import { recoilData } from '../../../recoil/atoms/dataState';

import * as S from './PostEdit.styled';
import defaultProfileImg from '../../../assets/img/basic-profile-img-.svg';

export default function Upload({ userImg }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const textareaRef = useRef(null);
  const imgRef = useRef(null);

  const token = useRecoilValue(recoilData).token;

  const loadPost = async () => {
    try {
      const res = await instance.get(`/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const [loadContent, loadImage] = [
        res.data.post.content,
        res.data.post.image,
      ];
      setContent(loadContent);
      setImage(loadImage);
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

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

      const res = await instance.put(`/post/${id}`, data, {
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
          value={content}
        ></S.Textarea>
        {image && <S.PostImage ref={imgRef} src={image} alt="게시글 이미지" />}
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput type="file" id="uploadImg" onChange={uploadHanlder} />
        </div>
      </S.Section>
    </>
  );
}
