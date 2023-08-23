import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAlert, useBottomSheet } from '../../../hooks/useModal';

import {
  TopDiv,
  ArrowLeftBtn,
  MainTitle,
  OptionBtn,
} from './TopChatNav.styled';

export default function TopChatNav({ children }) {
  const navigate = useNavigate();
  const { openAlert } = useAlert();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  return (
    <>
      <TopDiv>
        <ArrowLeftBtn onClick={() => navigate(-1)} />
        <MainTitle>{children}</MainTitle>
        <OptionBtn
          onClick={() =>
            openBottomSheet(
              <button
                onClick={() => {
                  openAlert({
                    title: '채팅방을 나가시겠습니까?',
                    actionText: '채팅방 나가기',
                    actionFunction: () => navigate('/chatlist'),
                  });
                  closeBottomSheet();
                }}
              >
                채팅방 나가기
              </button>,
            )
          }
        />
      </TopDiv>
    </>
  );
}
