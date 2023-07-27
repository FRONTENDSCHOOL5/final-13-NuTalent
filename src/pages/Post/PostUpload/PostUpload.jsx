import React, { useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import TopUploadNav from '../../../components/common/Top/TopUploadNav';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useCreatePost } from '../../../hooks/react-query/usePost';
import { useUploadImage } from '../../../hooks/react-query/useImage';

import * as S from './PostUpload.styled';
import defaultProfileImg from '../../../assets/img/basic-profile-img-.svg';

export default function PostUpload() {
  const [content, setContent] = useState('');

  const textareaRef = useRef(null);
  const currentUserData = useRecoilValue(recoilData);

  const { createPostMutate } = useCreatePost();
  const { uploadedImage, handleImageChange } = useUploadImage();

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
        disabled={!(content || uploadedImage)}
        onClick={() => createPostMutate({ content, image: uploadedImage })}
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
        ></S.Textarea>
        {uploadedImage && (
          <S.PostImage src={uploadedImage} alt="게시글 이미지" />
        )}
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
