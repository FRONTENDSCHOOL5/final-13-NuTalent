import React from 'react';
import home from '../../../assets/img/icon-home.svg';
import messageCircle from '../../../assets/img/icon-message-circle.svg';
import addPost from '../../../assets/img/icon-edit.svg';
import user from '../../../assets/img/icon-user.svg';
import { TabMenuUl, TabMenuLi } from './TabMenu.styled';

export default function TabMenu() {
  return (
    <>
      <TabMenuUl>
        <TabMenuLi>
          <a>
            <img src={home} />
            <p>홈</p>
          </a>
        </TabMenuLi>
        <TabMenuLi>
          <a>
            <img src={messageCircle} />
            <p>채팅</p>
          </a>
        </TabMenuLi>
        <TabMenuLi>
          <a>
            <img src={addPost} />
            <p>게시물 작성</p>
          </a>
        </TabMenuLi>
        <TabMenuLi>
          <a>
            <img src={user} />
            <p>프로필</p>
          </a>
        </TabMenuLi>
      </TabMenuUl>
    </>
  );
}
