import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';
import Button from '../Button/Button';

const TopDiv = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  border-bottom: 0.05rem solid var(--sub-grey);
`;
const ArrowLeftBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  margin: 1.3rem 0;
  background-image: url(${arrowLeft});
`;
export default function TopUploadNav({ contents, size, onClick, disabled }) {
  return (
    <TopDiv>
      <ArrowLeftBtn />

      <Button
        size={size}
        onClick={onClick}
        disabled={disabled}
        contents={contents}
      />
    </TopDiv>
  );
}
