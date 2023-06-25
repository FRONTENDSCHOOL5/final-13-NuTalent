import React, { useState } from 'react';
import * as S from './FollowingUser.styled';
import StyledBtn from '../../../components/common/Button/Button';

export default function FollowingUser({
  size,
  userName,

  userIntro,
  userImg,
  type,
}) {
  const [followingState, setFollowingState] = useState(
    type === 'follow' ? true : false,
  );

  /* User컴포넌트를 여러곳에서 쓰고 싶을 때 if문 사용 */
  //   const button = () => {
  //     if(type === 'follow') {
  //       return (
  //         <StyledBtn
  //           size={'l'}
  //           width={100}
  //           color={type === 'follow' ? 'outline' : ''}
  //           onClick={}
  //           to={false}>
  //         {type === 'follow' ? '취소' : '팔로우'}
  //         </StyledBtn>
  //       )
  //     } else if(type === 'unfollow') {
  //       return (
  //        <StyledBtn />
  //       )
  //     }

  //   }

  return (
    <S.FollowingUserWrapper>
      <S.FollowingUserStyled>
        <S.FollowingUserImage size={size} src={userImg} alt="사용자 이미지" />
        <S.FollowingUserTextBox>
          <S.FollowingUserName>{userName}</S.FollowingUserName>
          <S.FollowingUserIntro>{userIntro}</S.FollowingUserIntro>
        </S.FollowingUserTextBox>

        <S.BtnBox>
          {/* 삼항 연산자는 값이 2개로 나뉠 때만 쓰는 것이 가독성이 좋음 */}
          <StyledBtn
            size={'s'}
            width={'10'}
            color={followingState === true ? 'outline' : ''}
            onClick={() => setFollowingState(!followingState)}
            to={false}
          >
            {followingState === true ? '취소' : '팔로우'}
          </StyledBtn>
        </S.BtnBox>
        {/* if문으로 컴포넌트 처리해야 할 때 쓰는 버튼 */}
        {/* {button()} */}
      </S.FollowingUserStyled>
    </S.FollowingUserWrapper>
  );
}
