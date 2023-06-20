import React from 'react';
import { ItemBox } from './ProductItem.styled';

export default function ProductItem({ itemName, price, itemImg }) {
  return (
    <ItemBox>
      <img src={itemImg} alt="상품 사진" />
      <h1>{itemName}</h1>
      <p>{price}</p>
    </ItemBox>
  );
}
