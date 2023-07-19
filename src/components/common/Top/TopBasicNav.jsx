import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import BottomSheetModal from '../BottomSheetModal/BottomSheetModal';
import Alert from '../Alert/Alert';

import { recoilData } from '../../../recoil/atoms/dataState';

import {
  TopDiv,
  ArrowLeftBtn,
  OptionBtn,
  ArrowLeftBtnText,
} from '../Top/TopBasicNav.styled';

export default function TopBasicNav({ children }) {
  const navigate = useNavigate();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const setCurrentUserData = useSetRecoilState(recoilData);

  const bottomSheetHandler = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const logout = () => {
    setCurrentUserData({});
    navigate('/intro');
  };

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (isBottomSheetOpen && bottomSheetRef.current) {
      console.log(bottomSheetRef);
      console.log(bottomSheetRef.current);
      bottomSheetRef.current.focus();
    }
  }, [isBottomSheetOpen, isAlertOpen]);

  return (
    <>
      <TopDiv>
        <ArrowLeftBtn
          onClick={() => {
            navigate(-1);
          }}
        />
        <ArrowLeftBtnText>{children}</ArrowLeftBtnText>
        <OptionBtn onClick={() => setIsBottomSheetOpen(true)} />
      </TopDiv>
      <BottomSheetModal
        isOpen={isBottomSheetOpen}
        bottomSheetHandler={bottomSheetHandler}
      >
        <button ref={bottomSheetRef}>설정 및 개인정보</button>
        <button
          onClick={() => {
            setIsBottomSheetOpen(false);
            setIsAlertOpen(true);
          }}
        >
          로그아웃
        </button>
      </BottomSheetModal>
      <Alert
        isOpen={isAlertOpen}
        title="로그아웃 하시겠습니까?"
        cancel={() => setIsAlertOpen(false)}
        actionText="로그아웃"
        action={logout}
      />
    </>
  );
}
