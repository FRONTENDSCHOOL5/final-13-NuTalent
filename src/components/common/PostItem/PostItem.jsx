import React from 'react';
import * as S from './PostItem.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import User from '../User/User';

export default function PostItem({
  userName,
  userId,
  userImg,
  postText,
  postImg,
  postLike,
  postDate,
  postMessage,
  user_id,
  postId,
}) {
  // console.log('userId userName user_id', userId, userName, user_id);
  // console.log(postDate);
  const date = postDate.slice(0, 10).split('-');

  const [isLiked, setIsLiked] = useState(false);

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
        <S.PostLink to={`/post/${postId}`} state={{ userId, user_id }}>
          <S.PostText>{postText}</S.PostText>
          {postImg && <S.PostImage src={postImg} alt="게시물 이미지" />}
        </S.PostLink>

        <S.PostButtons>
          <S.PostLike onClick={() => setIsLiked(!isLiked)} isLiked={isLiked} />
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
