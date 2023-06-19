import React from 'react';
import * as S from './Alert.styled';

export default function Alert({ title, cancel, action, actionText }) {
  return (
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
  );
}
