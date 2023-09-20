import { styled } from 'styled-components';

export const PostItemWrapper = styled.div`
  min-width: 32rem;
  max-width: 64rem;
  margin: 0 auto;
  padding: 6.8rem 1.6rem 2rem;
  & a {
    cursor: default;
  }
  & img,
  div {
    cursor: pointer;
  }
`;
