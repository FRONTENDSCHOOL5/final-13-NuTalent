import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';
import Button from '../Button/Button';

const TopDiv = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
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
export default function TopUploadNav({ disabled }) {
  return (
    <TopDiv>
      <ArrowLeftBtn />

      <Button disabled={disabled} size="ms">
        저장
      </Button>
    </TopDiv>
  );
}
