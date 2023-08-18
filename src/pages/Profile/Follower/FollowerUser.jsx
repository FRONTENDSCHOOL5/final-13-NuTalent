import React from 'react';
import * as S from './FollowerUser.styled';
import StyledBtn from '../../../components/common/Button/Button';
import handleImageError from '../../../util/handleImageError';
import { Link } from 'react-router-dom';

export default function FollowerUser({
  size,
  userInfo,
  followHandler,
  myAccountName,
}) {
  return (
    <S.FollowerUserStyled>
      <Link
        to={`/profile/${userInfo.accountname}`}
        state={{ userId: userInfo.accountname }}
      >
        <S.FollowerUserImage
          size={size}
          src={userInfo.image}
          onError={handleImageError}
          alt="사용자 이미지"
        />
        <S.FollowerUserTextBox>
          <S.FollowerUserName>{userInfo.username}</S.FollowerUserName>
          <S.FollowerUserIntro>{userInfo.intro}</S.FollowerUserIntro>
        </S.FollowerUserTextBox>
      </Link>
      <S.BtnBox>
        {userInfo.accountname !== myAccountName && (
          <StyledBtn
            size={'s'}
            width={'10'}
            color={userInfo.isfollow === true ? 'outline' : ''}
            onClick={() => followHandler(userInfo)}
            to={false}
          >
            {userInfo.isfollow === true ? '취소' : '팔로우'}
          </StyledBtn>
        )}
      </S.BtnBox>
    </S.FollowerUserStyled>
  );
}
