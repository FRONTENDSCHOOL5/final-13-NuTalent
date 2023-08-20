import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopChatNav from '../../../components/common/Top/TopChatNav';
import * as S from './ChatRoom.styled';

export default function ChatRoom() {
  const location = useLocation();

  const [isMessageTyped, setIsMessageTyped] = useState(false);
  const [isImageTyped, setIsImageTyped] = useState(false);

  // const partnerAccount = location.state.partnerAccount;
  const partnerName = location.state.partnerName;
  const partnerImg = location.state.partnerImg;
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
    setMessage(e.target.value);
    if (message) {
      setIsMessageTyped(true);
    } else if (!message) {
      setIsMessageTyped(false);
    }
  };

  return (
    <>
      <TopChatNav>{partnerName}</TopChatNav>
      <S.Container>
        <S.ChatUL>
          {chatContents.map((item, index) => {
            return (
              <S.ChatLi key={index} className={item.isMyMessage ? 'me' : ''}>
                {!item.isMyMessage ? (
                  <>
                    <img src={partnerImg} alt="대화 상대 프로필 사진" />
                    <p>{item.content}</p>
                  </>
                ) : (
                  <p>{item.content}</p>
                )}
                {/* {<p>{item.content}</p>} */}
              </S.ChatLi>
            );
          })}
        </S.ChatUL>
        {/* <S.ChatArticle>
          <img src={partnerProfile} alt="유저 프로필 사진" />
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
          value={message}
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
