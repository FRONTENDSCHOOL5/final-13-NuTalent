import React from 'react';
import { styled } from 'styled-components';

const ItemBox = styled.article`
  width: 14rem;
  height: 13.2rem;

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
  }
  p {
    font-weight: 700;
    font-size: 1.2rem;

    color: #f26e22;
    margin-top: 0.4rem;
  }
`;

  export default function ProductItem({itemName,price,itemImg}) {
  return (
    <ItemBox>

      <img src={itemImg} alt="상품 사진" />
      <h1>{itemName}</h1>
      <p>{price}</p>
    </ItemBox>
  );
}

