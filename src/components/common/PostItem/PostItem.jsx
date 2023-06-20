import React from 'react';
import * as S from './PostItem.styled';

import User from '../User/User';

export default function Post({
  userName,
  userId,
  userImg,
  postText,
  postImg,
  postDate,
  postLike,
  postMessage,
}) {
  return (
    <S.PostArticle>
      <User
        size="small"
        userName={userName}
        userId={userId}
        userImg={userImg}
      />
      <S.PostContainer stContainer>
        <S.PostText>{postText}</S.PostText>
        {postImg && <S.PostImage src={postImg} alt="게시물 이미지" />}
        <S.PostButtons>
          <S.PostLike />
          <S.PostSpan>{postLike}</S.PostSpan>
          <S.PostMessage />
          <S.PostSpan>{postMessage}</S.PostSpan>
        </S.PostButtons>
        <S.PostDate>{postDate}</S.PostDate>
      </S.PostContainer>
      <S.PostMore />
    </S.PostArticle>
  );
}
