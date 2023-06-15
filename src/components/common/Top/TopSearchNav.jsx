import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';

const TopDiv = styled.div`
  width: 39rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  padding: 0 1.6rem;
  gap: 2rem;
`;
const ArrowLeftBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background: url(${arrowLeft}) no-repeat 0 0 / contain;
`;
const SearchInp = styled.input`
  background: #f2f2f2;
  border-radius: 3.2rem;
  width: 31.6rem;
  height: 3.2rem;

  padding-left: 1.6rem;

  &::placeholder {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #c4c4c4;
  }
`;
export default function TopSearchNav() {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <SearchInp placeholder="계정 검색" />
    </TopDiv>
  );
}
