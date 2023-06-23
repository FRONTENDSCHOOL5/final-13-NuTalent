import React from 'react';
import {
  TopDiv,
  ArrowLeftBtn,
  OptionBtn,
  ArrowLeftBtnText,
} from '../Top/TopBasicNav.styled';

export default function TopBasicNav({ children }) {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <ArrowLeftBtnText>{children}</ArrowLeftBtnText>
      <OptionBtn />
    </TopDiv>
  );
}
