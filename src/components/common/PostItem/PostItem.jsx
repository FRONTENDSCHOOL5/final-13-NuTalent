import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { instance } from '../../../util/api/axiosInstance';

import User from '../User/User';
import Carousel from '../Carousel/Carousel';
import { useAlert, useBottomSheet } from '../../../hooks/useModal';
import { recoilData } from '../../../recoil/atoms/dataState';
import useTag from '../../../hooks/useTag';

import * as S from './PostItem.styled';

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
  onDeletePost,
  postId,
}) {
  const { openAlert } = useAlert();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const token = useRecoilValue(recoilData).token;
  const { contentWithoutTag } = useTag();
  const currentUserData = useRecoilValue(recoilData);
  const date = postDate.slice(0, 10).split('-');

  const [isLiked, setIsLiked] = useState(postLike > 0);
  const [likeCount, setLikeCount] = useState(postLike);

  const isMyPost = currentUserData.accountname === userId;

  const onSubmitReportClick = async () => {
    try {
      await instance.post(
        `/post/${postId}/report`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );

      alert(
        `
      사용자 이름: ${userName}
      계정 내용: ${postText}
  
      신고가 완료되었습니다.`,
      );
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  const updatePostData = async () => {
    try {
      const response = await instance.get(`/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      //서버로부터 받은 게시물 데이터에서 각 정보를 가져와 상태 업데이트
      setIsLiked(response.data.post.hearted); //좋아요 상태
      setLikeCount(response.data.post.heartCount); //좋아요 개수
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  // isLiked에 따라 좋아요 및 취소 기능 실행
  const submitLike = async () => {
    try {
      if (isLiked) {
        await instance.delete(`/post/${postId}/unheart`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        });
        // .then((response) => {
        //   console.log(`좋아요 취소 성공`, response);
        // });
      } else {
        await instance.post(
          `/post/${postId}/heart`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          },
        );
        // .then((response) => {
        //   console.log(`좋아요 성공`, response);
        // });
      }

      updatePostData(); // 좋아요, 취소 처리 후 게시물 데이터 업데이트를 위해 호출
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    updatePostData(); // 컴포넌트가 마운트될 때 게시물 데이터 업데이트
  }, []);

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
            <S.PostLike onClick={submitLike} isLiked={isLiked} />
            <S.PostSpan>{likeCount}</S.PostSpan>
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
                      actionFunction: onSubmitReportClick,
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
