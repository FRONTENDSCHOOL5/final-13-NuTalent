import React from 'react';
import {
  TopDiv,
  ArrowLeftBtn,
  MainTitle,
  OptionBtn,
} from './TopChatNav.styled';

export default function TopChatNav({ children }) {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <MainTitle>{children}</MainTitle>
      <OptionBtn />
    </TopDiv>
  );
}
