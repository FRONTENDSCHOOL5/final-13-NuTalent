import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import BottomSheetModal from '../BottomSheetModal/BottomSheetModal';
import { useAlert } from '../../../hooks/useModal';

import {
  TopDiv,
  ArrowLeftBtn,
  MainTitle,
  OptionBtn,
} from './TopChatNav.styled';

export default function TopChatNav({ children }) {
  const navigate = useNavigate();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { openAlert } = useAlert();

  const bottomSheetHandler = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (isBottomSheetOpen && bottomSheetRef.current) {
      console.log(bottomSheetRef);
      console.log(bottomSheetRef.current);
      bottomSheetRef.current.focus();
    }
  }, [isBottomSheetOpen]);

  return (
    <>
      <TopDiv>
        <ArrowLeftBtn onClick={() => navigate(-1)} />
        <MainTitle>{children}</MainTitle>
        <OptionBtn onClick={() => setIsBottomSheetOpen(true)} />
      </TopDiv>
      <BottomSheetModal
        isOpen={isBottomSheetOpen}
        bottomSheetHandler={bottomSheetHandler}
      >
        <button
          ref={bottomSheetRef}
          onClick={() => {
            setIsBottomSheetOpen(false);
            openAlert({
              title: '채팅방을 나가시겠습니까?',
              actionText: '채팅방 나가기',
              actionFunction: () => navigate('/chatlist'),
            });
          }}
        >
          채팅방 나가기
        </button>
      </BottomSheetModal>
    </>
  );
}
