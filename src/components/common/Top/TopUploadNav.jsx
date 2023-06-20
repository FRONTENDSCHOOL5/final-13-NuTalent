import React from 'react';
import Button from '../Button/Button';
import { TopDiv, ArrowLeftBtn } from './TopBasicNav.styled';
export default function TopUploadNav({ to, disabled, onClick }) {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <Button to={to} disabled={disabled} onClick={onClick} size="ms">
        저장
      </Button>
    </TopDiv>
  );
}
