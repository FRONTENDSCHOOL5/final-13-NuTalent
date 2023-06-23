import React from 'react';
import * as S from './PostItem.styled';
import { Link } from 'react-router-dom';

import User from '../User/User';

export default function PostItem({
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
        to="/profile"
      />
      <S.PostContainer>
        <S.PostLink to="/post/id" state={userId}>
          <S.PostText>{postText}</S.PostText>
          {postImg && <S.PostImage src={postImg} alt="게시물 이미지" />}
        </S.PostLink>

        <S.PostButtons>
          <S.PostLike />
          <S.PostSpan>{postLike}</S.PostSpan>
          <Link to="/post/id" state={userId}>
            <S.PostMessage />
            <S.PostSpan>{postMessage}</S.PostSpan>
          </Link>
        </S.PostButtons>
        <S.PostDate>{postDate}</S.PostDate>
      </S.PostContainer>
      <S.PostMore />
    </S.PostArticle>
  );
}
