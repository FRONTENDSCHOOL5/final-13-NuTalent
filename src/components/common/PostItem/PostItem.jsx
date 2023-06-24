import React from 'react';
import * as S from './PostItem.styled';
import { Link } from 'react-router-dom';

import User from '../User/User';

export default function PostItem(props) {
  const post = props.post;
  return (
    <S.PostArticle>
      <User
        size="small"
        userName={post.author.username}
        userId={post.author.accountname}
        userImg={post.author.image}
        to="/profile"
      />
      <S.PostContainer>
        <S.PostLink
          to={`/post/${post.id}`}
          onClick={(e) => {
            if (!props.isLink) e.preventDefault();
          }}
        >
          <S.PostText>{post.content}</S.PostText>
          {post.image && <S.PostImage src={post.image} alt="게시물 이미지" />}
        </S.PostLink>

        <S.PostButtons>
          <S.PostLike />
          <S.PostSpan>{post.hearted}</S.PostSpan>
          <Link
            to={`/post/${post.id}`}
            // onClick={(e) => {
            //   if (!props.isLink) e.preventDefault();
            // }}
          >
            <S.PostMessage />
            <S.PostSpan>{post.commentCount}</S.PostSpan>
          </Link>
        </S.PostButtons>
        <S.PostDate>{post.createdAt}</S.PostDate>
      </S.PostContainer>
      <S.PostMore />
    </S.PostArticle>
  );
}
