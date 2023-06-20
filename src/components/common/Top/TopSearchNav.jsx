import React from 'react';
import { TopDiv, ArrowLeftBtn, SearchInp } from './TopSearchNav.styled';
export default function TopSearchNav() {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <SearchInp placeholder="계정 검색" />
    </TopDiv>
  );
}
