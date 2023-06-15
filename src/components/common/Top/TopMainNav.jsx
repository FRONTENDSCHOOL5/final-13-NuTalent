import React from 'react';
import styled from 'styled-components';
import searchImg from '../../../assets/img/icon-search.svg';

const TopDiv = styled.div`
  width: 39rem;
  height: 4.8rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
`;
const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
const SearchBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${searchImg});
`;
export default function TopMainNav() {
  return (
    <TopDiv>
      <MainTitle>타이틀명 피드</MainTitle>
      <SearchBtn />
    </TopDiv>
  );
}
