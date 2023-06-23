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
          {children.map((child, index) => (
            <li key={index}>{child.name}</li>
          ))}
        </Modal>
      </Overlay>,
      document.body,
    )
  );
};

export default BottomSheetModal;
