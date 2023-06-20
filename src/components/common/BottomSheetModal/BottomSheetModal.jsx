import React from 'react';
import Modal from './BottomSheetModal.styled';

const BottomSheetModal = ({ children }) => {
  console.log(children);
  return (
    <Modal>
      <span></span>
      {children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </Modal>
  );
};

export default BottomSheetModal;
