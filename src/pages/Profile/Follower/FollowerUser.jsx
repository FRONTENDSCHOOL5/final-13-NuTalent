import React from 'react';
import * as S from './FollowerUser.styled';
import StyledBtn from '../../../components/common/Button/Button';
import { Link } from 'react-router-dom';

export default function FollowerUser({ size, userInfo, followHandler }) {
  return (
    <S.FollowerUserStyled>
      <Link
        to={`/profile/${userInfo.accountname}`}
        state={{ userId: userInfo.accountname }}
      >
        <S.FollowerUserImage
          size={size}
          src={userInfo.image}
          alt="사용자 이미지"
        />
        <S.FollowerUserTextBox>
          <S.FollowerUserName>{userInfo.username}</S.FollowerUserName>
          <S.FollowerUserIntro>{userInfo.intro}</S.FollowerUserIntro>
        </S.FollowerUserTextBox>
      </Link>
      <S.BtnBox>
        {/* 삼항 연산자는 값이 2개로 나뉠 때만 쓰는 것이 가독성이 좋음 */}
        <StyledBtn
          size={'s'}
          width={'10'}
          color={userInfo.isfollow === true ? 'outline' : ''}
          onClick={() => followHandler(userInfo)}
          to={false}
        >
          {userInfo.isfollow === true ? '취소' : '팔로우'}
        </StyledBtn>
      </S.BtnBox>
    </S.FollowerUserStyled>
  );
}
