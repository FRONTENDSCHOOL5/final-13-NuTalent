import React from 'react';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import FollowerUser from './FollowerUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import { UserWrapper } from './Follower.styled';
import { useLocation } from 'react-router-dom';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useRecoilValue } from 'recoil';
import { useFollowStatus } from '../../../hooks/react-query/useFollowStatus';

export default function Follower() {
  const location = useLocation();
  const { accountName, myAccountName } = location.state;
  const token = useRecoilValue(recoilData).token;
  const { followers, unfollowMutation, followMutation } = useFollowStatus(
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
      console.log(error);
      // alert(`${error.response.data.message}`);
    }
  };

  return (
    <>
      <TopBasicNav>Followers</TopBasicNav>
      <UserWrapper>
        {(() => {
          if (!followers) return;

          // find 사용하여 내 계정 찾기
          const myAccount = followers.find(
            (user) => user.accountname === myAccountName,
          );

          // filter 사용하여 다른 사람의 계정만 필터링
          const otherFollowers = followers.filter((user) => user !== myAccount);

          // myAccount가 존재하면 배열에 myAccount를 첫번째 요소로 추가한 후 전개문법 사용하여 otherFollowers의 모든 요소들을 추가
          // myAccount가 없다면 바로 otherFollowers 추가
          const sortedFollowers = myAccount
            ? [myAccount, ...otherFollowers]
            : otherFollowers;

          return sortedFollowers.map((user) => (
            <li key={user._id}>
              <FollowerUser
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
