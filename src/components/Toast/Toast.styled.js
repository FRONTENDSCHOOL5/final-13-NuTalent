import { styled } from 'styled-components';

export const ToastRoot = styled.div`
  position: fixed;
  bottom: 8rem;
  width: 32rem;
  left: calc(50% - 16rem);
  margin: 0 auto;
`;

export const ToastContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$status === 'error' ? `var(--error)` : `var(--main-purple)`};
  border-radius: 1rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.3);

  span {
    font-size: 1.4rem;
    color: white;
  }
`;
