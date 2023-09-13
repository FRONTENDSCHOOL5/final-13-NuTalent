import React from 'react';

import Modal from '../../Modal/Modal';

import * as S from './BottomSheetModal.styled';

const BottomSheetModal = ({ isOpen, children, onClose }) => {
  console.log(children);

  return (
    <Modal
      isOpen={isOpen}
      hasBackdrop
      isBackdropClose={true}
      onClose={onClose}
      transitionStyle="slide"
      position="bottom"
    >
      <S.BottomSheetContainer>{children}</S.BottomSheetContainer>
    </Modal>
  );
};

export default BottomSheetModal;
