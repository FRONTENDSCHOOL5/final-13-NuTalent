import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import User from '../User/User';
import Carousel from '../Carousel/Carousel';
import likeImg from '../../../assets/img/icon-heart.svg';
import ActiveLikeImg from '../../../assets/img/Active-icon-heart.svg';
import { useAlert, useBottomSheet } from '../../../hooks/useModal';
import { useReportPost } from '../../../hooks/react-query/usePost';
import { recoilData } from '../../../recoil/atoms/dataState';
import useTag from '../../../hooks/useTag';

import * as S from './PostItem.styled';
import { useDeleteLike, useLike } from '../../../hooks/react-query/useLike';

export default function PostItem({
  userName,
  userId,
  userImg,
  postText,
  postImg,
  postHearted,
  postLike,
  postDate,
  postMessage,
  user_id,
  onDeletePost,
  postId,
}) {
  const currentUserData = useRecoilValue(recoilData);
  const { reportPostMutate } = useReportPost(postId);
  const { likeMutate } = useLike(postId);
  const { deleteLikeMutate } = useDeleteLike(postId);
  const { openAlert } = useAlert();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const { contentWithoutTag } = useTag();
  const date = postDate.slice(0, 10).split('-');
  const isMyPost = currentUserData.accountname === userId;

  return (
    <>
      <S.PostArticle>
        <User
          size="small"
          userName={userName}
          userId={userId}
          userImg={userImg}
          to={`/profile/${userId}`}
          state={{ userId, user_id }}
          user_id={user_id}
        />
        <S.PostContainer>
          <S.PostLink to={`/post/${postId}`} state={{ userId, user_id }}>
            <S.PostText>{contentWithoutTag(postText)}</S.PostText>
          </S.PostLink>
          {postImg && <Carousel images={postImg} />}
          <S.PostButtons>
            <S.PostLike
              onClick={
                postHearted
                  ? () => deleteLikeMutate(postId)
                  : () => likeMutate(postId)
              }
            >
              <img
                src={postHearted ? ActiveLikeImg : likeImg}
                alt="좋아요 이미지"
              />
            </S.PostLike>
            <S.PostSpan>{postLike}</S.PostSpan>
            <Link to={`/post/${postId}`} state={{ userId, user_id }}>
              <S.PostMessage />
              <S.PostSpan>{postMessage}</S.PostSpan>
            </Link>
          </S.PostButtons>
          <S.PostDate>{`${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.PostDate>
        </S.PostContainer>
        <S.PostMore
          onClick={() =>
            openBottomSheet(
              isMyPost ? (
                <>
                  <button
                    onClick={() => {
                      openAlert({
                        title: '게시글을 삭제할까요?',
                        actionText: '삭제',
                        actionFunction: onDeletePost,
                      });
                      closeBottomSheet();
                    }}
                  >
                    삭제
                  </button>
                  <Link onClick={closeBottomSheet} to={`/post/edit/${postId}`}>
                    수정
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    openAlert({
                      title: '게시글을 신고할까요?',
                      actionText: '신고',
                      actionFunction: reportPostMutate,
                    });
                    closeBottomSheet();
                  }}
                >
                  신고하기
                </button>
              ),
            )
          }
        />
      </S.PostArticle>
    </>
  );
}
