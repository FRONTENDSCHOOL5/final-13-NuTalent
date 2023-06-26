import { styled, css } from 'styled-components';

const Modal = styled.div`
  border-radius: 1rem 1rem 0 0;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background-color: #fff;

  span {
    height: 10px;
    height: 0.4rem;
    width: 7rem;
    background-color: #dbdbdb;
    border-radius: 5rem;
    margin: 2rem auto;
    display: block;
  }

  button,
  a {
    width: 100%;
    height: 4.6rem;
    padding: 1.4rem 2.6rem;
    font-size: 1.6rem;
    text-align: start;
    cursor: pointer;
    list-style: none;
    justify-content: start;

    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.3);
`;

export { Modal, Overlay };
