import React from 'react';
import { TopDiv, ArrowLeftBtn, SearchInp } from './TopSearchNav.styled';
export default function TopSearchNav(props) {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <SearchInp placeholder="계정 검색" {...props} />
    </TopDiv>
  );
}
