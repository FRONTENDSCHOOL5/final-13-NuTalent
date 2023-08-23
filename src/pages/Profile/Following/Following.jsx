import React from 'react';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import FollowingUser from './FollowingUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import { UserWrapper } from './Following.styled';
import { useLocation } from 'react-router-dom';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useRecoilValue } from 'recoil';
import { useGetFollowings } from '../../../hooks/react-query/useGetFollowing';
import { useMutation } from 'react-query';
import { instance } from '../../../util/api/axiosInstance';

export default function Following() {
  const location = useLocation();
  const { accountName, myAccountName } = location.state;
  const token = useRecoilValue(recoilData).token;

  // 팔로잉
  const { followings, queryClient } = useGetFollowings(accountName);

  // Unfollow mutation
  const unfollowMutation = useMutation(
    (userInfo) =>
      instance.delete(
        `/profile/${userInfo.accountname}/unfollow?limit=infinite&skip=0`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['followings', accountName]);
      },
    },
  );

  // Follow mutation
  const followMutation = useMutation(
    (userInfo) =>
      instance.post(
        `/profile/${userInfo.accountname}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['followings', accountName]);
      },
    },
  );

  const followHandler = async (userInfo) => {
    try {
      if (userInfo.isfollow) {
        await unfollowMutation.mutateAsync(userInfo);
      } else {
        await followMutation.mutateAsync(userInfo);
      }
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
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

          // myAccount가 존재하면 배열에 myAccount를 첫번째 요소로 추가한 후 전개문법 사용하여 otherFollowings의 모든 요소들을 추가
          // myAccount가 없다면 바로 otherFollowings 추가
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
