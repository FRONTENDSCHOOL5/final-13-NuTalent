import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Transition from '../common/Transition/Transition';
import useCloseAfterTransition from '../../hooks/useCloseAfterTransition';

import * as S from './Modal.styled';

export default function Modal({
  isOpen,
  onClose = () => {},
  hasBackdrop = true,
  isBackdropClose = false,
  children,
}) {
  const { isTransitionComplete } = useCloseAfterTransition(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleBackdropClose = isBackdropClose ? onClose : null;

  return (
    isTransitionComplete &&
    createPortal(
      <S.ModalRoot>
        <S.ModalBackdrop
          onClick={handleBackdropClose}
          $isOpen={isOpen}
          $hasBackdrop={hasBackdrop}
        />
        <Transition isOpen={isOpen}>{children}</Transition>
      </S.ModalRoot>,
      document.body,
    )
  );
}
