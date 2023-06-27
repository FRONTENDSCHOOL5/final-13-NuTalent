import { styled } from 'styled-components';

export const ItemBox = styled.article`
  width: 14rem;
  height: 13.2rem;
  position: relative;

  img {
    width: 100%;
    height: 9rem;
    border: 0.5px solid #dbdbdb;
    border-radius: 0.8rem;
    object-fit: contain;
  }

  h1 {
    font-weight: 400;
    font-size: 1.4rem;
    margin-top: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    .tooltip {
      display: none;
      position: absolute;
      top: rem;
      left: 0rem;
      top: 9.6rem;
      background-color: white;
      z-index: 100;
      font-size: 1.2;
      font-weight: 900;
    }

    &:hover .tooltip{
      display: inline-block;
    }
  }

  p {
    font-weight: 700;
    font-size: 1.2rem;

    color: #f26e22;
    margin-top: 0.4rem;
  }
`;
