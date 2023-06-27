import React from 'react';
import { ItemBox } from './ProductItem.styled';

export default function ProductItem({ itemName, price, itemImg }) {
  return (
    <ItemBox>
      <img src={itemImg} alt="상품 사진" />
      <h1>
        {itemName}
        <span className="tooltip">{itemName}</span>
      </h1>

      <p>{price.toLocaleString()}원</p>
    </ItemBox>
  );
}
