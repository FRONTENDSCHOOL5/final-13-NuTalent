import React from 'react';

import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';

import * as S from './ChatList.styled';

export default function ChatList() {
  const ChatDummy = [
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687741772524.JPG',
      userName: '방구석뮤지션',
      userAccount: 'itismusic',
      chatContents: '디제잉 레슨 받습니다. 회당 2.5 그룹레슨 네고 가능합니다.',
      chatTime: '2023.06.27',
      isRead: false,
    },
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687295086842.png',
      userName: '그림팝니다',
      userAccount: 'sellpicture',
      chatContents: '어떤 그림 말씀이실까요?',
      chatTime: '2023.06.22',
      isRead: false,
    },
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687741795495.jpg',
      userName: 'nutalent',
      userAccount: 'nutalent',
      chatContents: '언제 가능하실까요?',
      chatTime: '2023.06.26',
      isRead: true,
    },
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687741517699.jpg',
      userName: '퇴근후아티스트',
      userAccount: 'iamartist',
      chatContents: '안녕하세요!',
      chatTime: '2023.06.01',
      isRead: true,
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
                {!item.isRead ? <S.UnreadMarker /> : <div />}
                <S.ChatItem
                  to={`/chatlist/${item.userAccount}`}
                  state={{
                    userName: item.userName,
                    userImg: item.userImg,
                    chatContents: item.chatContents,
                  }}
                >
                  <S.UserImg src={item.userImg} alt="프로필 사진" />
                  <S.ChatWrapper>
                    <S.UserName>{item.userName}</S.UserName>
                    <S.ChatContent>
                      <S.ChatText>{item.chatContents}</S.ChatText>
                      <S.ChatTime>{item.chatTime}</S.ChatTime>
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
