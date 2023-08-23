import React from 'react';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import FollowerUser from './FollowerUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import { UserWrapper } from './Follower.styled';
import { useLocation } from 'react-router-dom';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useRecoilValue } from 'recoil';
import { useGetFollowers } from '../../../hooks/react-query/useGetFollow';
import { useMutation } from 'react-query';
import { instance } from '../../../util/api/axiosInstance';

export default function Follower() {
  const location = useLocation();
  const { accountName, myAccountName } = location.state;
  const token = useRecoilValue(recoilData).token;

  // 팔로워
  const { followers, queryClient } = useGetFollowers(accountName);

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
        queryClient.invalidateQueries(['followers', accountName]);
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
        queryClient.invalidateQueries(['followers', accountName]);
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
                userInfo={user} // 나를 팔로우 하는 사람들 각각의 정보를 넘김
                followHandler={followHandler} // 팔로우 핸들러 함수
                size={'small'} // 아이콘 사이즈
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
