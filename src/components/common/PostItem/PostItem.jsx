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

export default function PostItem({ postData, onDeletePost }) {
  const currentUserData = useRecoilValue(recoilData);
  console.log(postData);
  const { reportPostMutate } = useReportPost(postData.id);
  const { likeMutate } = useLike();
  const { deleteLikeMutate } = useDeleteLike();
  const { openAlert } = useAlert();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const { contentWithoutTag } = useTag();
  const date = postData.createdAt.slice(0, 10).split('-');
  const isMyPost = currentUserData.accountname === postData.author.accountname;

  return (
    <>
      <S.PostArticle>
        <User
          size="small"
          userName={postData.author.username}
          userAccountname={postData.author.accountname}
          userImg={postData.author.image}
          to={`/profile/${postData.author.accountname}`}
        />
        <S.PostContainer>
          <S.PostLink to={`/post/${postData.id}`}>
            <S.PostText>{contentWithoutTag(postData.content)}</S.PostText>
          </S.PostLink>
          {postData.image && <Carousel images={postData.image} />}
          <S.PostButtons>
            <S.PostLike
              onClick={
                postData.hearted
                  ? () => deleteLikeMutate(postData.id)
                  : () => likeMutate(postData.id)
              }
            >
              <img
                src={postData.hearted ? ActiveLikeImg : likeImg}
                alt="좋아요 이미지"
              />
            </S.PostLike>
            <S.PostSpan>{postData.heartCount}</S.PostSpan>
            <Link to={`/post/${postData.id}`}>
              <S.PostMessage />
              <S.PostSpan>{postData.commentCount}</S.PostSpan>
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
                  <Link
                    onClick={closeBottomSheet}
                    to={`/post/edit/${postData.id}`}
                  >
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
