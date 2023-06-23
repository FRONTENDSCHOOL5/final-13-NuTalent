import React from 'react';
import TopChatNav from '../../../components/common/Top/TopChatNav';
import * as S from './ChatRoom.styled';

export default function ChatRoom() {
  const data = {
    userName: 'XXXX',
    id: '123123',
  };

  return (
    <>
      <TopChatNav>{data.userName}</TopChatNav>
      <S.Container>
        <S.ChatArticle>
          <img src="" alt="" />
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
          <img src="" alt="" />
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
