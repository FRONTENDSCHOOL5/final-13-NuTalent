import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopUploadNav from '../../../components/common/Top/TopUploadNav';

import imageValidation from '../../../util/validation/imageValidation';
import { instance } from '../../../util/api/axiosInstance';

import { recoilData } from '../../../recoil/atoms/dataState';

import * as S from './PostEdit.styled';
import defaultProfileImg from '../../../assets/img/basic-profile-img-.svg';

export default function PostEdit() {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const textareaRef = useRef(null);
  const token = useRecoilValue(recoilData).token;
  const currentUserData = useRecoilValue(recoilData);
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
        res.data.post.image.split(',').filter((item) => item.trim() !== ''),
      ];
      setContent(loadContent);
      setImages(loadImage);
      console.log(images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  useEffect(() => {
    textareaHeightControl();
  }, [content]);

  // 텍스트에 따라 textarea의 높이 동적으로 조절
  const textareaHeightControl = () => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${
      textareaRef.current.scrollHeight / 10
    }rem`;
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const uploadHandler = async (e) => {
    const selectedImages = e.target.files; // 선택된 이미지들 가져오기
    const uploadedImages = [];
    if (selectedImages.length > 3) {
      // 다중 선택된 이미지가 3개를 초과하는 경우
      alert('이미지는 최대 3개까지 선택할 수 있습니다.');
      return; // 업로드를 막고 함수를 종료
    }
    if (images.length >= 3) {
      // 하나씩 올리는 이미지가 3개를 초과하는경우
      alert('이미지 업로드는 최대 3개까지 가능합니다');
      return;
    }

    for (let i = 0; i < selectedImages.length; i++) {
      const selectedImage = selectedImages[i];
      if (imageValidation(selectedImage)) {
        const formdata = new FormData();
        formdata.append('image', selectedImage);
        const res = await instance.post('/image/uploadfile', formdata);
        const uploadedImage = `${res.config.baseURL}/${res.data.filename}`;
        uploadedImages.push(uploadedImage);
      }
    }

    setImages((prevImages) => [...prevImages, ...uploadedImages]); // 새로운 이미지들을 기존 이미지 배열에 추가
  };
  const deleteHandler = (index) => {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  };

  const submitHandler = async () => {
    const image = images.join(',');
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
        disabled={!(content || images)}
        onClick={submitHandler}
      >
        업로드
      </TopUploadNav>
      <S.Section>
        <S.ProfileImg
          src={currentUserData.image || defaultProfileImg}
          alt="프로필 이미지"
        />
        <S.Textarea
          ref={textareaRef}
          placeholder="게시글 입력하기..."
          onChange={contentHandler}
          value={content}
        ></S.Textarea>
        {images.length > 0 &&
          images.map((image, index) => (
            <S.imgLayout key={`imgLayout-${index}`}>
              <S.PostImage key={index} src={image} alt={`게시글 이미지 `} />
              <S.Deletebtn
                type="button"
                key={`Deletebtn-${index}`}
                onClick={() => deleteHandler(index)}
              ></S.Deletebtn>
            </S.imgLayout>
          ))}
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput
            type="file"
            id="uploadImg"
            onChange={uploadHandler}
            multiple
          />
        </div>
      </S.Section>
    </>
  );
}
