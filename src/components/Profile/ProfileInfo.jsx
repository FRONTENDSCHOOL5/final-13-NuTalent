import React from 'react';
import { useRecoilValue } from 'recoil';

import StyledBtn from '../../components/common/Button/Button';
import handleImageError from '../../util/handleImageError';
import { recoilData } from '../../recoil/atoms/dataState';

import * as S from './ProfileInfo.styled';

export default function ProfileInfo({ profile, followToggle }) {
  const myAccountname = useRecoilValue(recoilData).accountname;
  const isMyProfile = profile.accountname === myAccountname;

  const handleCopyClipBoard = async (text) => {
    if (navigator.canShare) {
      try {
        await navigator.share({
          title: 'nutalent',
          text: 'welcome to nutalent!!',
          url: text,
        });
      } catch (err) {
        console.log(err);
      }
      return;
    } else {
      try {
        await navigator.clipboard.writeText(text);
        alert('클립보드에 링크가 복사되었어요.');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <S.ProfileSection>
      <S.ProfileWrap>
        <S.followLink to="follower">
          <p>{profile.followerCount}</p>
          <p>followers</p>
        </S.followLink>
        <S.ProfileImg
          src={profile.image}
          onError={handleImageError}
          alt="프로필 사진"
        />
        <S.followLink to="following">
          <p>{profile.followingCount}</p>
          <p>followings</p>
        </S.followLink>
      </S.ProfileWrap>
      <S.UserName>{profile.username}</S.UserName>
      <S.UserId>@ {profile.accountname}</S.UserId>
      <S.UserIntro>{profile.intro}</S.UserIntro>
      {isMyProfile ? (
        <S.UserBtnWrap>
          <StyledBtn to="/profile/edit" size="m" color="outline">
            프로필 수정
          </StyledBtn>
          <StyledBtn to="/productupload" size="m" color="outline">
            상품 등록
          </StyledBtn>
        </S.UserBtnWrap>
      ) : (
        <S.UserBtnWrap>
          <S.messageButton
            to={`/chatlist/${profile.accountname}`}
            state={{
              userName: profile.username,
              userImg: profile.image,
            }}
          />
          <StyledBtn
            size="m"
            color={profile.isfollow ? 'outlineGrey' : 'fill'}
            onClick={followToggle}
          >
            {profile.isfollow ? '언팔로우' : '팔로우'}
          </StyledBtn>
          <S.shareButton
            onClick={() => handleCopyClipBoard(window.location.href)}
          />
        </S.UserBtnWrap>
      )}
    </S.ProfileSection>
  );
}
