import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import TopChatNav from '../../../components/common/Top/TopChatNav';
import * as S from './ChatRoom.styled';

export default function ChatRoom() {
  const location = useLocation();

  const [isMessageTyped, setIsMessageTyped] = useState(false);
  const [isImageTyped, setIsImageTyped] = useState(false);
  const [message, setMessage] = useState('');

  // const partnerAccount = location.state.partnerAccount;
  const partnerName = location.state.partnerName;
  const partnerImg = location.state.partnerImg;
  const chatContents = location.state.chatContents;

  console.log(location.state);

  const socket = io('http://localhost:8000');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });
  }, []);

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
    const typedMessage = e.target.value;
    setMessage(typedMessage);
    if (message) {
      setIsMessageTyped(true);
    } else if (!message) {
      setIsMessageTyped(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    const date = new Date();
    const params = {
      content: message,
      time: date,
      isRead: false,
    };
    socket.emit('send message', params);
    socket.on('send message', (data) => {
      console.log(data);
    });

    setMessage('');
    console.log('메시지 전송 완료');
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
      </S.Container>
      <S.ChatForm onSubmit={handleSendMessage}>
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
          type="submit"
          // disabled
        >
          전송
        </S.SendButton>
      </S.ChatForm>
    </>
  );
}
