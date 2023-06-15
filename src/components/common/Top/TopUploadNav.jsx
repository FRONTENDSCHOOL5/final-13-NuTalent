import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';
import MsButton from '../Button/MsButton';

const TopDiv = styled.div`
  width: 39rem;
  height: 4.8rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
`;
const ArrowLeftBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  margin: 1.3rem 0;
  background-image: url(${arrowLeft});
`;
export default function TopUploadNav() {
  return (
    <TopDiv>
      <ArrowLeftBtn />

      <MsButton />
    </TopDiv>
  );
}
