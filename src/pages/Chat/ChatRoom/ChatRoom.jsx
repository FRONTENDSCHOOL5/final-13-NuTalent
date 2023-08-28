import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import TopNav from '../../../components/common/Top/TopNav';

import * as S from './ChatRoom.styled';

export default function ChatRoom() {
  const location = useLocation();

  const [isMessageTyped, setIsMessageTyped] = useState(false);
  const [isImageTyped, setIsImageTyped] = useState(false);

  const userName = location.state.userName;
  const userProfile = location.state.userImg;
  const chatContents = location.state.chatContents;

  console.log(location.state);

  const handleImageChange = (e) => {
    // console.log(e.target.files);
    // setIsImageTyped(false);
    const imageTyped = e.target.files[0];
    if (imageTyped) {
      setIsImageTyped(true);
    } else if (!imageTyped) {
      setIsImageTyped(false);
    }
  };

  const handleMessageChange = (e) => {
    const message = e.target.value;
    if (message) {
      setIsMessageTyped(true);
    } else if (!message) {
      setIsMessageTyped(false);
    }
  };

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <TopNav.Title>{userName}</TopNav.Title>
        <TopNav.OptionButton type="chat" />
      </TopNav>
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
          <p>{chatContents}</p>
        </S.ChatArticle>
        {/* <S.ChatArticle className="me">
          <p>Lorem ipsum dolor sit.</p>
        </S.ChatArticle> */}
      </S.Container>
      <S.ChatForm>
        <S.FileLabel htmlFor="image"></S.FileLabel>
        <S.FileInput
          type="file"
          name=""
          id="image"
          onChange={handleImageChange}
        />
        <S.TextInput
          type="text"
          placeholder="메시지 입력하기..."
          onChange={handleMessageChange}
        />
        <S.SendButton
          disabled={!isMessageTyped && !isImageTyped}
          type="button"
          // disabled
        >
          전송
        </S.SendButton>
      </S.ChatForm>
    </>
  );
}
