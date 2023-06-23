import React from 'react';
import {
  TopDiv,
  ArrowLeftBtn,
  OptionBtn,
  ArrowLeftBtnText,
} from '../Top/TopBasicNav.styled';

export default function TopBasicNav({ children, openModal }) {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <ArrowLeftBtnText>{children}</ArrowLeftBtnText>
      <OptionBtn onClick={() => openModal()} />
    </TopDiv>
  );
}
