import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  TopDiv,
  ArrowLeftBtn,
  MainTitle,
  OptionBtn,
} from './TopChatNav.styled';

export default function TopChatNav({ children, onClick }) {
  const navigate = useNavigate();

  return (
    <TopDiv>
      <ArrowLeftBtn onClick={() => navigate(-1)} />
      <MainTitle>{children}</MainTitle>
      <OptionBtn onClick={onClick} />
    </TopDiv>
  );
}
