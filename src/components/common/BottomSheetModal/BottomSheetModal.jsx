import React from 'react';
import { Modal, Overlay } from './BottomSheetModal.styled';
import { createPortal } from 'react-dom';

const BottomSheetModal = ({ isOpen, children }) => {
  return (
    isOpen &&
    createPortal(
      <Overlay>
        <Modal>
          <span></span>
          {children}
        </Modal>
      </Overlay>,
      document.body,
    )
  );
};

export default BottomSheetModal;
