import React from 'react';
import { LBtnBasic, LBtnDisabled } from './LButton.styled';

function StyleLBtn({ children, width }) {
  return <LBtnBasic width={width}>{children}</LBtnBasic>;
}

function LButton() {
  return (
    <div>
      <LBtnDisabled></LBtnDisabled>
    </div>
  );
}

export { StyleLBtn, LButton };
