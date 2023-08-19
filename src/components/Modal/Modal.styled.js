import { styled, css } from 'styled-components';

export const ModalRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${(props) =>
    props.$isOpen
      ? css`
          animation: fadeIn 0.2s ease-out forwards;
        `
      : css`
          animation: fadeOut 0.2s ease-out forwards;
        `}

  @keyframes fadeIn {
    from {
      background-color: transparent;
    }
    to {
      background-color: rgb(0, 0, 0, 0.5);
    }
  }
  @keyframes fadeOut {
    from {
      background-color: rgb(0, 0, 0, 0.5);
    }
    to {
      background-color: transparent;
    }
  }
`;

export const ModalContainer = styled.div`
  position: relative;
`;
