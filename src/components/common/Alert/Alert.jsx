import React from 'react';
import * as S from './Alert.styled';
import { createPortal } from 'react-dom';

export default function Alert({ isOpen, title, cancel, action, actionText }) {
  return (
    isOpen &&
    createPortal(
      <S.Overlay>
        <S.Alert>
          <p>{title}</p>
          <div>
            <button type="button" onClick={cancel}>
              취소
            </button>
            <button type="button" onClick={action}>
              {actionText}
            </button>
          </div>
        </S.Alert>
      </S.Overlay>,
      document.body,
    )
  );
}