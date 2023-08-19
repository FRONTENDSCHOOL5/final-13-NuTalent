import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
  `;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(300%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(300%);
  }
`;

export const TransitionContainer = styled.div`
  animation-duration: ${(props) => props.$duration}ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;

  ${(props) =>
    props.$isOpen
      ? css`
          animation-name: ${(props) => {
            if (props.$transitionStyle === 'fade') return fadeIn;
            if (props.$transitionStyle === 'slide') return slideIn;
          }};
        `
      : css`
          animation-name: ${(props) => {
            if (props.$transitionStyle === 'fade') return fadeOut;
            if (props.$transitionStyle === 'slide') return slideOut;
          }};
        `}
`;
