import React from 'react';
import * as S from './Alert.styled';

export default function Alert({ title, action, onClick }) {
  return (
    <S.Alert>
      <p>{title}</p>
      <div>
        <button type="button">취소</button>
        <button type="button" onClick={onClick}>
          {action}
        </button>
      </div>
    </S.Alert>
  );
}
