import React from 'react';
import home from '../../../assets/img/icon-home.svg';
import messageCircle from '../../../assets/img/icon-message-circle.svg';
import addPost from '../../../assets/img/icon-edit.svg';
import user from '../../../assets/img/icon-user.svg';

import ActiveHome from '../../../assets/img/icon-home-fill.svg';
import ActiveMessageCircle from '../../../assets/img/icon-message-circle-fill.svg';
import ActiveAddPost from '../../../assets/img/more-btn-active.svg';
import ActiveUser from '../../../assets/img/icon-user-fill.svg';

import { TabMenuUl, TabMenuLi, TabMenuLiLink } from './TabMenu.styled';
import { useRecoilValue } from 'recoil';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useLocation } from 'react-router-dom';

export default function TabMenu() {
  const currentUserData = useRecoilValue(recoilData);

  const location = useLocation();

  return (
    <>
      <TabMenuUl>
        <TabMenuLi>
          <TabMenuLiLink to="/home">
            <img
              src={location.pathname === '/home' ? ActiveHome : home}
              alt="홈"
            />
            <p
              style={{
                color:
                  location.pathname === '/home' ? '#F26E22' : 'var(--sub-grey)',
              }}
            >
              홈
            </p>
          </TabMenuLiLink>
        </TabMenuLi>
        <TabMenuLi>
          <TabMenuLiLink to="/chatlist">
            <img
              src={
                location.pathname === '/chatlist'
                  ? ActiveMessageCircle
                  : messageCircle
              }
              alt="채팅"
            />
            <p
              style={{
                color:
                  location.pathname === '/chatlist'
                    ? '#F26E22'
                    : 'var(--sub-grey)',
              }}
            >
              채팅
            </p>
          </TabMenuLiLink>
        </TabMenuLi>
        <TabMenuLi>
          <TabMenuLiLink to="/post/upload">
            <img
              src={
                location.pathname === '/post/upload' ? ActiveAddPost : addPost
              }
              alt="게시물 작성"
            />
            <p
              style={{
                color:
                  location.pathname === '/post/upload'
                    ? '#F26E22'
                    : 'var(--sub-grey)',
              }}
            >
              게시물 작성
            </p>
          </TabMenuLiLink>
        </TabMenuLi>
        <TabMenuLi>
          <TabMenuLiLink to={`/profile/${currentUserData.accountname}`}>
            <img
              src={
                location.pathname === `/profile/${currentUserData.accountname}`
                  ? ActiveUser
                  : user
              }
              alt="프로필"
            />
            <p
              style={{
                color:
                  location.pathname ===
                  `/profile/${currentUserData.accountname}`
                    ? '#F26E22'
                    : 'var(--sub-grey)',
              }}
            >
              프로필
            </p>
          </TabMenuLiLink>
        </TabMenuLi>
      </TabMenuUl>
    </>
  );
}
