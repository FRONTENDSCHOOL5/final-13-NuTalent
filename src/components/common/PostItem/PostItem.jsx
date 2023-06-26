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
  postLike,
  postMessage,
  user_id,
}) {
  // console.log('userId userName user_id', userId, userName, user_id);

  const date = '2022-07-29T16:24:18.682Z'.slice(0, 10).split('-');

  return (
    <S.PostArticle>
      <User
        size="small"
        userName={userName}
        userId={userId}
        userImg={userImg}
        user_id={user_id}
        to={`/profile/${userId}`}
        state={{ userId, user_id }}
        // state={(userId, user_id)}
      />
      <S.PostContainer>
        <S.PostLink to={`/profile/${userId}`} state={{ userId, user_id }}>
          <S.PostText>{postText}</S.PostText>
          {postImg && <S.PostImage src={postImg} alt="게시물 이미지" />}
        </S.PostLink>

        <S.PostButtons>
          <S.PostLike />
          <S.PostSpan>{postLike}</S.PostSpan>
          <Link
            to={`/profile/${userId}`}
            state={{ userId, user_id }}
            // state={(userId, user_id)}
          >
            <S.PostMessage />
            <S.PostSpan>{postMessage}</S.PostSpan>
          </Link>
        </S.PostButtons>
        <S.PostDate>{`${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.PostDate>
      </S.PostContainer>
      <S.PostMore />
    </S.PostArticle>
  );
}
