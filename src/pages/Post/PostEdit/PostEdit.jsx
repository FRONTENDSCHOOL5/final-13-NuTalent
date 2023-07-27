import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopUploadNav from '../../../components/common/Top/TopUploadNav';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useCreatePost, useGetPost } from '../../../hooks/react-query/usePost';
import { useUploadImage } from '../../../hooks/react-query/useImage';

import * as S from './PostEdit.styled';
import defaultProfileImg from '../../../assets/img/basic-profile-img-.svg';

export default function PostEdit() {
  const { id } = useParams();
  const textareaRef = useRef(null);
  const currentUserData = useRecoilValue(recoilData);

  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const { post } = useGetPost(id);
  const { createPostMutate } = useCreatePost();
  const { uploadedImage, handleImageChange } = useUploadImage();

  useEffect(() => {
    setContent(post?.post.content);
    setImage(post?.post.image);
  }, [post]);

  useEffect(() => {
    setImage(uploadedImage);
  }, [uploadedImage]);

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

  const contentHanlder = (e) => {
    setContent(e.target.value);
    textareaHeightControl();
  };

  return (
    <>
      <TopUploadNav
        size="ms"
        disabled={!(content || image)}
        onClick={() => {
          createPostMutate({ content, image });
        }}
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
          onChange={contentHanlder}
          value={content}
        ></S.Textarea>
        {image && <S.PostImage src={image} alt="게시글 이미지" />}
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput
            type="file"
            id="uploadImg"
            onChange={handleImageChange}
          />
        </div>
      </S.Section>
    </>
  );
}
