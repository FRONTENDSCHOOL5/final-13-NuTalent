import { styled } from 'styled-components';

const Modal = styled.div`
  border-radius: 1rem 1rem 0 0;
  width: 100vw;

  span {
    height: 10px;
    height: 0.4rem;
    width: 7rem;
    background-color: #dbdbdb;
    border-radius: 5rem;
    margin: 2rem auto;

    display: block;
  }

  li {
    font-size: 1.6rem;
    width: 100%;
    height: 4.6rem;
    cursor: pointer;
    list-style: none;
    padding-left: 2.6rem;
    padding: 1.4rem 2.6rem;
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const Overlay = styled.div`
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border: solid 0.1rem #c4c4c4;
  /* height: 25%; */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  /* inset: 0; */
  z-index: 100;
  /* background-color: rgb(0, 0, 0, 0.3); */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Modal, Overlay };
