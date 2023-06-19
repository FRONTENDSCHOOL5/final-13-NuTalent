import React from 'react';
import home from '../../../assets/img/icon-home.svg';
import messageCircle from '../../../assets/img/icon-message-circle.svg';
import addPost from '../../../assets/img/icon-edit.svg';
import user from '../../../assets/img/icon-user.svg';
import { TabMenuUl, TabMenuLi } from './TabMenu.styled';
import { Link } from 'react-router-dom';

export default function TabMenu() {
  return (
    <>
      <TabMenuUl>
        <TabMenuLi>
          <Link to="/home">
            <img src={home} />
            <p>홈</p>
          </Link>
        </TabMenuLi>
        <TabMenuLi>
          <Link to="/chat">
            <img src={messageCircle} />
            <p>채팅</p>
          </Link>
        </TabMenuLi>
        <TabMenuLi>
          <Link to="/post">
            <img src={addPost} />
            <p>게시물 작성</p>
          </Link>
        </TabMenuLi>
        <TabMenuLi>
          <Link to="/profile">
            <img src={user} />
            <p>프로필</p>
          </Link>
        </TabMenuLi>
      </TabMenuUl>
    </>
  );
}
