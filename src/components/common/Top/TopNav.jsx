import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useAlert, useBottomSheet } from '../../../hooks/useModal';
import { recoilData } from '../../../recoil/atoms/dataState';

import * as S from '../Top/TopNav.styled';

export default function TopNav({ children }) {
  return <S.TopDiv>{children}</S.TopDiv>;
}

function Title({ size = 'lg', children }) {
  return <S.Title $size={size}>{children}</S.Title>;
}

function SearchInput({ placeholder = '계정 검색', ...props }) {
  return <S.SearchInput placeholder={placeholder} {...props} />;
}

function BackButton() {
  const navigate = useNavigate();

  return (
    <S.BackButton
      onClick={() => {
        navigate(-1);
      }}
    />
  );
}

function OptionButton({ type = 'basic' }) {
  const navigate = useNavigate();
  const setCurrentUserData = useSetRecoilState(recoilData);
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const { openAlert } = useAlert();

  const logout = () => {
    setCurrentUserData({});
    navigate('/intro');
  };

  const handleLogoutClick = () => {
    openAlert({
      title: '로그아웃 하시겠습니까?',
      actionText: '로그아웃',
      actionFunction: logout,
    });
    closeBottomSheet();
  };

  const hanldeExitChatroomClick = () => {
    openAlert({
      title: '채팅방을 나가시겠습니까?',
      actionText: '채팅방 나가기',
      actionFunction: () => navigate('/chatlist'),
    });
    closeBottomSheet();
  };

  const handleOptionClick = () => {
    if (type === 'basic') {
      openBottomSheet(<button onClick={handleLogoutClick}>로그아웃</button>);
      return;
    }

    if (type === 'chat') {
      openBottomSheet(
        <button onClick={hanldeExitChatroomClick}>채팅방 나가기</button>,
      );
      return;
    }
  };

  return <S.OptionButton onClick={handleOptionClick} />;
}

function SearchButton() {
  return <S.SearchButton to="/search" />;
}

TopNav.Title = Title;
TopNav.SearchInput = SearchInput;
TopNav.BackButton = BackButton;
TopNav.OptionButton = OptionButton;
TopNav.SearchButton = SearchButton;
