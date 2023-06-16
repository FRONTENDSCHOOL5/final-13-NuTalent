import React from 'react';
import TopUploadNav from '../../components/common/Top/TopUploadNav';
import * as S from './Upload.styled';
import defaultProfileImg from '../../assets/img/basic-profile.svg';

export default function Upload({ userImg }) {
  return (
    <>
      <TopUploadNav></TopUploadNav>
      <S.Form userImg={userImg || defaultProfileImg}>
        <S.Textarea placeholder="게시글 입력하기..."></S.Textarea>
        <S.Image src="" alt="게시글 이미지" />
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput type="file" id="uploadImg" />
        </div>
      </S.Form>
    </>
  );
}
