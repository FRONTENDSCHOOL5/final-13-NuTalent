import React from 'react';
import * as S from './PostItem.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import User from '../User/User';

<<<<<<< develop
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
}) {
  // console.log('userId userName user_id', userId, userName, user_id);

  const date = postDate.slice(0, 10).split('-');

  const [isLiked, setIsLiked] = useState(false);

=======
export default function PostItem(props) {
  const post = props.post;
>>>>>>> Feat: 게시글 상세페이지 기능 일부 구현(#89)
  return (
    <S.PostArticle>
      <User
        size="small"
<<<<<<< develop
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
          <S.PostLike onClick={() => setIsLiked(!isLiked)} isLiked={isLiked} />
          <S.PostSpan>{postLike}</S.PostSpan>
          <Link
            to={`/profile/${userId}`}
            state={{ userId, user_id }}
            // state={(userId, user_id)}
=======
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
>>>>>>> Feat: 게시글 상세페이지 기능 일부 구현(#89)
          >
            <S.PostMessage />
            <S.PostSpan>{post.commentCount}</S.PostSpan>
          </Link>
        </S.PostButtons>
<<<<<<< develop
        <S.PostDate>{`${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.PostDate>
=======
        <S.PostDate>{post.createdAt}</S.PostDate>
>>>>>>> Feat: 게시글 상세페이지 기능 일부 구현(#89)
      </S.PostContainer>
      <S.PostMore />
    </S.PostArticle>
  );
}
