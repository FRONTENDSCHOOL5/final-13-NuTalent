import React from 'react';
import styled from 'styled-components';

const SBtnBasic = styled.button`
  background-color: #7149c6;
  border-radius: 2.6rem;
  height: 2.8rem;
  width: 5.6rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;
const SBtnActive = styled.button`
  background-color: white;
  border: 0.1rem solid #dbdbdb;
  border-radius: 2.6rem;
  height: 2.8rem;
  width: 5.6rem;
  color: #767676;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default function StyleSBtn() {
  return (
    <div>
      <SBtnBasic>팔로우</SBtnBasic>
      <SBtnActive>취소</SBtnActive>
    </div>
  );
}
