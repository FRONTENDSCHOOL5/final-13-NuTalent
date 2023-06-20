import { styled } from 'styled-components';

const Modal = styled.div`
  border-radius: 1rem 1rem 0 0;
  width: 100vw;
  span {
    height: 0.4rem;
    width: 5rem;
    background-color: #dbdbdb;
    border-radius: 5rem;
    margin: 1.6rem auto;
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

export default Modal;
