import React from 'react';
import { useLocation } from 'react-router-dom';
import TopChatNav from '../../../components/common/Top/TopChatNav';
import * as S from './ChatRoom.styled';

export default function ChatRoom() {
  const location = useLocation();

  const userName = location.state.userName;
  const userProfile = location.state.userImg;

  console.log(location.state);

  return (
    <>
      <TopChatNav>{userName}</TopChatNav>
      <S.Container>
        <S.ChatArticle>
          <img src={userProfile} alt="유저 프로필 사진" />
          <p>Lorem, ipsum dolor.</p>
        </S.ChatArticle>
        <S.ChatArticle className="me">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            neque quidem a quasi corrupti voluptatum omnis in magnam ipsa
            tempore.
          </p>
        </S.ChatArticle>
        <S.ChatArticle>
          <img src={userProfile} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            debitis.
          </p>
        </S.ChatArticle>
        <S.ChatArticle className="me">
          <p>Lorem ipsum dolor sit.</p>
        </S.ChatArticle>
      </S.Container>
      <S.ChatForm>
        <S.FileLabel htmlFor="image"></S.FileLabel>
        <S.FileInput type="file" name="" id="image" />
        <S.TextInput type="text" placeholder="메시지 입력하기..." />
        <S.SendButton disabled>전송</S.SendButton>
      </S.ChatForm>
    </>
  );
}
