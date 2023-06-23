import React from 'react';
import home from '../../../assets/img/icon-home.svg';
import messageCircle from '../../../assets/img/icon-message-circle.svg';
import addPost from '../../../assets/img/icon-edit.svg';
import user from '../../../assets/img/icon-user.svg';
import { TabMenuUl, TabMenuLi, TabMenuLiLink } from './TabMenu.styled';

export default function TabMenu() {
  // TODO: userId 받는 로직 추가하기
  const userId = process.env.REACT_APP_USER_ID;

  return (
    <>
      <TabMenuUl>
        <TabMenuLi>
          <TabMenuLiLink to="/home">
            <img src={home} alt="홈" />
            <p>홈</p>
          </TabMenuLiLink>
        </TabMenuLi>
        <TabMenuLi>
          <TabMenuLiLink to="/chatlist">
            <img src={messageCircle} alt="채팅" />
            <p>채팅</p>
          </TabMenuLiLink>
        </TabMenuLi>
        <TabMenuLi>
          <TabMenuLiLink to="/post/upload">
            <img src={addPost} alt="게시물 작성" />
            <p>게시물 작성</p>
          </TabMenuLiLink>
        </TabMenuLi>
        <TabMenuLi>
          <TabMenuLiLink to={`/profile/${userId}`}>
            <img src={user} alt="프로필" />
            <p>프로필</p>
          </TabMenuLiLink>
        </TabMenuLi>
      </TabMenuUl>
    </>
  );
}
