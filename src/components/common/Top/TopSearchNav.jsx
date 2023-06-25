import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopDiv, ArrowLeftBtn, SearchInp } from './TopSearchNav.styled';
export default function TopSearchNav(props) {
  const navigate = useNavigate();

  return (
    <TopDiv>
      <ArrowLeftBtn onClick={() => navigate(-1)} />
      <SearchInp placeholder="계정 검색" {...props} />
    </TopDiv>
  );
}
