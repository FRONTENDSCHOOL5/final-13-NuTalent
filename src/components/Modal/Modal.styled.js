import { styled, css } from 'styled-components';

export const ModalRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
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

const position = {
  center: css`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  bottom: css`
    bottom: 0;
  `,
};

export const ModalContainer = styled.div`
  position: absolute;
  ${({ $position }) => position[$position]}
`;
