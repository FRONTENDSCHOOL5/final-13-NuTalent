import React from 'react';
import styled from 'styled-components';

const MsBtnBasic = styled.button`
  background-color: #7149c6;
  border-radius: 3.2rem;
  height: 3.2rem;
  width: 9rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`;
const MsBtnDisabled = styled.button`
  background-color: #ada2ff;
  border-radius: 3.2rem;
  height: 3.2rem;
  width: 9rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`;

export default function StyleMsBtn() {
  return (
    <div>
      <MsBtnBasic>저장</MsBtnBasic>
      <MsBtnDisabled>저장</MsBtnDisabled>
    </div>
  );
}
