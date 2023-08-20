import React from 'react';

import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';

import * as S from './ChatList.styled';

export default function ChatList() {
  const ChatDummy = [
    {
      partnerAccount: 'itismusic',
      partnerName: '방구석뮤지션',
      partnerImg: 'https://api.mandarin.weniv.co.kr/1687741772524.JPG',
      chatList: [
        {
          index: 1,
          isMyMessage: false,
          content: '디제잉 레슨 받습니다. 회당 2.5 그룹레슨 네고 가능합니다.',
          time: '2023.06.27',
          isRead: false,
        },
      ],
    },
    {
      partnerAccount: 'nutalent',
      partnerName: 'nutalent',
      partnerImg: 'https://api.mandarin.weniv.co.kr/1687741795495.jpg',
      chatList: [
        {
          index: 1,
          isMyMessage: true,
          content: '언제 가능하실까요?',
          time: '2023.06.26',
          isRead: true,
        },
      ],
    },
    {
      partnerAccount: 'iamartist',
      partnerName: '퇴근후아티스트',
      partnerImg: 'https://api.mandarin.weniv.co.kr/1687741517699.jpg',
      chatList: [
        {
          index: 1,
          isMyMessage: true,
          content: '안녕하세요~',
          time: '2023.06.01',
          isRead: true,
        },
        {
          index: 2,
          isMyMessage: false,
          content: '안녕하세요!',
          time: '2023.06.01',
          isRead: true,
        },
        {
          index: 3,
          isMyMessage: true,
          content: '올려주신 강의에 대해서 궁금한게 있어서 연락드렸습니다.',
          time: '2023.06.01',
          isRead: true,
        },
        {
          index: 4,
          isMyMessage: true,
          content: '친구 2명이랑 총 세명이서 레슨하면 가격이 어떻게 되나요?',
          time: '2023.06.01',
          isRead: false,
        },
        {
          index: 5,
          isMyMessage: false,
          content: '3인 그룹 레슨일 경우에는 1인당 15만원씩 45만원입니다~!',
          time: '2023.06.01',
          isRead: false,
        },
        {
          index: 6,
          isMyMessage: true,
          content: '2명일 경우에는 가격이 어떻게 되나요?',
          time: '2023.06.01',
          isRead: false,
        },
      ],
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
                {!item.chatList[item.chatList.length - 1].isRead ? (
                  <S.UnreadMarker />
                ) : (
                  <div />
                )}
                <S.ChatItem
                  to={`/chatlist/${item.partnerAccount}`}
                  state={{
                    partnerName: item.partnerName,
                    partnerImg: item.partnerImg,
                    chatContents: item.chatList,
                  }}
                >
                  <S.UserImg src={item.partnerImg} alt="프로필 사진" />
                  <S.ChatWrapper>
                    <S.UserName>{item.partnerName}</S.UserName>
                    <S.ChatContent>
                      <S.ChatText>
                        {item.chatList[item.chatList.length - 1].content}
                      </S.ChatText>
                      <S.ChatTime>
                        {item.chatList[item.chatList.length - 1].time}
                      </S.ChatTime>
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
