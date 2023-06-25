import React, { useState, useEffect } from 'react';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import FollowingUser from './FollowingUser';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';

import { UserWrapper } from './Following.styled';
import { instance } from '../../../util/api/axiosInstance';
import { useLocation } from 'react-router-dom';

export default function Following() {
  const token = localStorage.getItem('token');

  const [following, setFollowing] = useState([]);

  const location = useLocation();
  const accountName = location.state;
  console.log(accountName);

  /* 
    2. 버튼 눌렀을 때 getFollowers 가 실행이 되고 서버와 통신해서 setFollowers에 나를 팔로우한 사람들의 데이터를 넣는다.
    그렇게 되면 빈 배열이 아니라 값이 채워지게 되고, 아래 return 문으로 가게 되면
  */
  const getFollowing = async () => {
    const res = await instance.get(
      `https://api.mandarin.weniv.co.kr/profile/${accountName}/following`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    setFollowing(res.data);
    console.log(res);
  };

  // useEffect(콜백함수, 의존성 배열)
  // 의존성 배열의 요소가 변경되면 콜백함수 실행
  useEffect(() => {
    getFollowing();
  }, []);

  return (
    <>
      <TopBasicNav>Followings</TopBasicNav>
      <UserWrapper>
        {/* 3. 이곳에 useState에 채워져있는 배열이 map으로 뿌려지게 되고, 빈 화면이 아니라 유저들의 정보가 화면에 뿌려지게 된다. */}
        {following.map((user) => {
          return (
            <li key={user._id}>
              <FollowingUser
                size={'small'}
                userName={user.username}
                accountName={user.accountName}
                userIntro={user.Intro}
                userImg={user.image}
                type={user.isfollow && 'follow'}
              />
            </li>
          );
        })}

        {/* 1. 버튼을 클릭하지 않으면 서버와 통신하지 않아 useState의 followers에 값이 들어가지 않음. 따라서 useState의 초기값인 빈 배열이 생성 */}
      </UserWrapper>
      <TabMenu></TabMenu>
    </>
  );
}
