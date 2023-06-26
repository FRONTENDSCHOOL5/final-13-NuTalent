import React from 'react';

import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';

import * as S from './ChatList.styled';

export default function ChatList() {
  const ChatDummy = [
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687741772524.JPG',
      UserName: '방구석뮤지션',
      UserAccount: 'itismusic',
      ChatContent: '디제잉 레슨 받습니다. 회당 2.5 그룹레슨 네고 가능합니다.',
      ChatTime: '2023.06.27',
      isRead: false,
    },
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687295086842.png',
      UserName: '그림팝니다',
      UserAccount: 'sellpicture',
      ChatContent: '어떤 그림 말씀이실까요?',
      ChatTime: '2023.06.22',
      isRead: false,
    },
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687741795495.jpg',
      UserName: 'nutalent',
      UserAccount: 'nutalent',
      ChatContent: '언제 가능하실까요?',
      ChatTime: '2023.06.26',
      isRead: true,
    },
    {
      userImg: 'https://api.mandarin.weniv.co.kr/1687741517699.jpg',
      UserName: '퇴근후아티스트',
      UserAccount: 'iamartist',
      ChatContent: '안녕하세요!',
      ChatTime: '2023.06.01',
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
                  to={`/chatlist/${item.UserAccount}`}
                  state={item.UserName}
                >
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
