import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useAlert, useBottomSheet } from '../../../hooks/useModal';
import { recoilData } from '../../../recoil/atoms/dataState';

import {
  TopDiv,
  ArrowLeftBtn,
  OptionBtn,
  ArrowLeftBtnText,
} from '../Top/TopBasicNav.styled';

export default function TopBasicNav({ children }) {
  const navigate = useNavigate();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const { openAlert } = useAlert();

  const setCurrentUserData = useSetRecoilState(recoilData);

  const logout = () => {
    setCurrentUserData({});
    navigate('/intro');
  };

  return (
    <>
      <TopDiv>
        <ArrowLeftBtn
          onClick={() => {
            navigate(-1);
          }}
        />
        <ArrowLeftBtnText>{children}</ArrowLeftBtnText>
        <OptionBtn
          onClick={() =>
            openBottomSheet(
              <button
                onClick={() => {
                  openAlert({
                    title: '로그아웃 하시겠습니까?',
                    actionText: '로그아웃',
                    actionFunction: logout,
                  });
                  closeBottomSheet();
                }}
              >
                로그아웃
              </button>,
            )
          }
        />
      </TopDiv>
    </>
  );
}
