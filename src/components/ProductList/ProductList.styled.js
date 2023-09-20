import styled from 'styled-components';

export const ProductSection = styled.section`
  padding: 2rem 1.6rem;
`;

export const StyledH2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    border: 0.7rem solid white;
    border-right: 1rem solid white;
    border-radius: 5rem;
    background-color: var(--main-purple);
  }
`;
