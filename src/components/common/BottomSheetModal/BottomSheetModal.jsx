import React, { useEffect } from 'react';
import { Modal, Overlay } from './BottomSheetModal.styled';
import { createPortal } from 'react-dom';

const BottomSheetModal = ({ isOpen, children, bottomSheetHandler }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const overlayClickHandler = (e) => {
    if (e.currentTarget === e.target) {
      bottomSheetHandler();
    }
  };

  return (
    isOpen &&
    createPortal(
      <Overlay onClick={overlayClickHandler}>
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
