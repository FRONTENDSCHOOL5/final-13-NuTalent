import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import User from '../User/User';
import BottomSheetModal from '../BottomSheetModal/BottomSheetModal';
import Alert from '../Alert/Alert';

import { recoilData } from '../../../recoil/atoms/dataState';

import * as S from './PostItem.styled';

// ? userId는 accountname임 착가하지말기
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
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const currentUserData = useRecoilValue(recoilData);
  const date = postDate.slice(0, 10).split('-');

  const [isLiked, setIsLiked] = useState(false);

  // 작성자와 나의 accountname을 비교
  const isMyPost = currentUserData.accountname === userId;

  const bottomSheetHandler = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (isBottomSheetOpen && bottomSheetRef.current) {
      console.log(bottomSheetRef);
      console.log(bottomSheetRef.current);
      bottomSheetRef.current.focus();
    }
  }, [isBottomSheetOpen, isAlertOpen]);

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
            <S.PostText>{postText}</S.PostText>
            {postImg && <S.PostImage src={postImg} alt="게시물 이미지" />}
          </S.PostLink>

          <S.PostButtons>
            <S.PostLike
              onClick={() => setIsLiked(!isLiked)}
              isLiked={isLiked}
            />
            <S.PostSpan>{postLike}</S.PostSpan>
            <Link to={`/profile/${userId}`} state={{ userId, user_id }}>
              <S.PostMessage />
              <S.PostSpan>{postMessage}</S.PostSpan>
            </Link>
          </S.PostButtons>
          <S.PostDate>{`${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.PostDate>
        </S.PostContainer>
        <S.PostMore onClick={() => setIsBottomSheetOpen(true)} />
      </S.PostArticle>
      <BottomSheetModal
        isOpen={isBottomSheetOpen}
        bottomSheetHandler={bottomSheetHandler}
      >
        {isMyPost ? (
          <>
            <button
              className="modalBtn"
              ref={bottomSheetRef}
              onClick={() => {
                setIsBottomSheetOpen(false);
                setIsAlertOpen(true);
              }}
            >
              삭제
            </button>
            <Link className="modalBtn" to={`/post/edit/${postId}`}>
              수정
            </Link>
          </>
        ) : (
          <button>신고하기</button>
        )}
      </BottomSheetModal>
      <Alert
        isOpen={isAlertOpen}
        title="게시글을 삭제할까요?"
        cancel={() => setIsAlertOpen(false)}
        actionText="삭제"
        action={() => {
          onDeletePost();
          setIsAlertOpen(false);
        }}
      />
   </>
  );
}
