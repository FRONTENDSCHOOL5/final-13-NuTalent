import React from 'react';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import FollowingUser from './FollowingUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import { UserWrapper } from './Following.styled';
import { useLocation } from 'react-router-dom';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useRecoilValue } from 'recoil';
import { useFollowStatus } from '../../../hooks/react-query/useFollowStatus';

export default function Following() {
  const location = useLocation();
  const { accountName, myAccountName } = location.state;
  const token = useRecoilValue(recoilData).token;
  const { followings, unfollowMutation, followMutation } = useFollowStatus(
    accountName,
    token,
  );

  const followHandler = (userInfo) => {
    try {
      if (userInfo.isfollow) {
        unfollowMutation(userInfo);
      } else {
        followMutation(userInfo);
      }
    } catch (error) {
      console.error(error);
      // alert(`${error.response.data.message}`);
    }
  };

  return (
    <>
      <TopBasicNav>Followings</TopBasicNav>
      <UserWrapper>
        {(() => {
          if (!followings) return;

          // find 사용하여 내 계정 찾기
          const myAccount = followings.find(
            (user) => user.accountname === myAccountName,
          );

          // filter 사용하여 다른 사람의 계정만 필터링
          const otherFollowings = followings.filter(
            (user) => user !== myAccount,
          );

          // myAccount가 존재하면 배열에 myAccount를 첫번째 요소로 추가한 후 전개문법 사용하여 otherFollowers의 모든 요소들을 추가
          // myAccount가 없다면 바로 otherFollowers 추가
          const sortedFollowings = myAccount
            ? [myAccount, ...otherFollowings]
            : otherFollowings;

          return sortedFollowings.map((user) => (
            <li key={user._id}>
              <FollowingUser
                userInfo={user}
                followHandler={followHandler}
                size={'small'}
                myAccountName={myAccountName}
              />
            </li>
          ));
        })()}
      </UserWrapper>
      <TabMenu></TabMenu>
    </>
  );
}
