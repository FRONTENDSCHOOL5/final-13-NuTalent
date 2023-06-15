import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';
import optionImg from '../../../assets/img/icon-more-vertical.svg';

const TopDiv = styled.div`
  width: 39rem;
  height: 4.8rem;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.6rem;
  gap: 1rem;
`;
const ArrowLeftBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background-image: url(${arrowLeft});
`;
const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

const OptionBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${optionImg});
  margin-left: auto;
`;
export default function TopChatNav() {
  return (
    <TopDiv>
      <ArrowLeftBtn />
      <MainTitle>채팅 타이틀</MainTitle>
      <OptionBtn />
    </TopDiv>
  );
}
