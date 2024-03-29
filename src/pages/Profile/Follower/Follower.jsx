import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopNav from '../../../components/common/Top/TopNav';
import FollowerUser from './FollowerUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import { UserWrapper } from './Follower.styled';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useFollowStatus } from '../../../hooks/react-query/useFollowStatus';

export default function Follower() {
  const { accountname } = useParams();
  const { token, accountname: myAccountname } = useRecoilValue(recoilData);
  const { followers, unfollowMutation, followMutation } = useFollowStatus(
    accountname,
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
      <TopNav>
        <TopNav.BackButton />
        <TopNav.Title size="sm">Followers</TopNav.Title>
      </TopNav>
      <UserWrapper>
        {(() => {
          if (!followers) return;

          // find 사용하여 내 계정 찾기
          const myAccount = followers.find(
            (user) => user.accountname === myAccountname,
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
                myAccountName={myAccountname}
              />
            </li>
          ));
        })()}
      </UserWrapper>
      <TabMenu></TabMenu>
    </>
  );
}
