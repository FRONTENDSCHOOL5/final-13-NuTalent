import React from 'react';

import Modal from '../../Modal/Modal';

import * as S from './Alert.styled';

export default function Alert({
  isOpen,
  title,
  actionText,
  actionFunction,
  onClose,
}) {
  const handleAction = () => {
    actionFunction();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} hasBackdrop onClose={onClose}>
      <S.AlertContainer>
        <S.Alert>
          <S.AlertTitle>{title}</S.AlertTitle>
          <S.AlertContent>
            <button type="button" onClick={onClose}>
              취소
            </button>
            <button type="button" onClick={handleAction}>
              {actionText}
            </button>
          </S.AlertContent>
        </S.Alert>
      </S.AlertContainer>
    </Modal>
  );
}
