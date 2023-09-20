import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #f2f2f2;
  line-height: 1.2;
  padding: 4.8rem 0;
  min-height: 100vh;
  overflow: hidden;
  & > * {
    margin-bottom: 1rem;
    background-color: #fff;
    border-width: 0.05rem 0;
    border-color: var(--sub-grey);
    border-style: solid;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
