import { styled } from 'styled-components';

export const BottomSheetContainer = styled.div`
  border-radius: 1rem 1rem 0 0;
  width: 100vw;
  background-color: #fff;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    width: 7rem;
    height: 0.4rem;
    background-color: #dbdbdb;
    border-radius: 5rem;
    margin: 2rem auto;
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
