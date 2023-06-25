import React from 'react';

import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';

import * as S from './ChatList.styled';

export default function ChatList() {
  const ChatDummy = [
    {
      userImg: 'https://picsum.photos/200',
      UserName: 'nutalent',
      ChatContent: '안녕하세요!',
      ChatTime: '2023.06.22',
    },
    {
      userImg: 'https://picsum.photos/200',
      UserName: 'nutalent',
      ChatContent: '안녕하세요!',
      ChatTime: '2023.06.22',
    },
    {
      userImg: 'https://picsum.photos/200',
      UserName: 'nutalent',
      ChatContent: '안녕하세요!',
      ChatTime: '2023.06.22',
    },
  ];

  return (
    <>
      <TopBasicNav />
      <S.Container>
        <S.ChatList>
          {ChatDummy.map((item, index) => {
            return (
              <li key={index}>
                <S.ChatItem to="/chatlist/:id">
                  <S.UserImg src={item.userImg} alt="프로필 사진" />
                  <S.ChatWrapper>
                    <S.UserName>{item.UserName}</S.UserName>
                    <S.ChatContent>
                      <S.ChatText>{item.ChatContent}</S.ChatText>
                      <S.ChatTime>{item.ChatTime}</S.ChatTime>
                    </S.ChatContent>
                  </S.ChatWrapper>
                </S.ChatItem>
              </li>
            );
          })}
        </S.ChatList>
      </S.Container>
      <TabMenu />
    </>
  );
}
