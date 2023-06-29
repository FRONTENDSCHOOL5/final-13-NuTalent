import React, { useEffect } from 'react';
import * as S from './Alert.styled';
import { createPortal } from 'react-dom';

export default function Alert({ isOpen, title, cancel, action, actionText }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    isOpen &&
    createPortal(
      <S.Overlay>
        <S.Alert isOpen={isOpen}>
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
