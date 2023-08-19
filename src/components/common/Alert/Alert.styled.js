import { styled } from 'styled-components';

export const AlertContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Alert = styled.div`
  width: 25.2rem;
  height: 11rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  text-align: center;
  background-color: #fff;
  overflow: hidden;
`;

export const AlertTitle = styled.span`
  line-height: 6.2rem;
  flex-grow: 1;
  font-size: 1.6rem;
  font-weight: 500;
  border-bottom: 0.05rem solid var(--sub-grey);
`;

export const AlertContent = styled.div`
  button {
    width: 12.6rem;
    height: 4.6rem;
    font-size: 1.4rem;

    &:hover {
      background-color: #eee;
    }

    &:active {
      background-color: #ddd;
    }

    &:first-child {
      border-right: 0.05rem solid var(--sub-grey);
    }
    &:last-child {
      color: var(--main-purple);
      font-weight: 500;
    }
  }
`;
