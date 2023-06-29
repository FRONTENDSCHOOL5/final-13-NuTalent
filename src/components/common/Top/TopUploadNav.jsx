import React from 'react';
import Button from '../Button/Button';
import { TopDiv, ArrowLeftBtn } from './TopUploadNav.styled';
import { useNavigate } from 'react-router-dom';

export default function TopUploadNav({ to, disabled, onClick }) {
  const navigate = useNavigate();

  return (
    <TopDiv>
      <ArrowLeftBtn onClick={() => navigate(-1)} />
      <Button to={to} disabled={disabled} onClick={onClick} size="ms">
        저장
      </Button>
    </TopDiv>
  );
}
