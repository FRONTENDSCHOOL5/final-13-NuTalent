import React from 'react';

import ProductItem from '../common/ProductItem/ProductItem';

import * as S from './ProductList.styled';

export default function ProductList({ products, deleteProduct }) {
  return (
    products.length > 0 && (
      <S.ProductSection>
        <S.StyledH2>판매 중인 상품</S.StyledH2>
        <S.ProductList>
          {products.map((product) => {
            return (
              <li key={product.id + 'asdas'}>
                <ProductItem
                  productId={product.id}
                  accountname={product.author.accountname}
                  itemName={product.itemName}
                  price={product.price}
                  itemImg={product.itemImage}
                  onDelete={deleteProduct}
                  link={product.link}
                />
              </li>
            );
          })}
        </S.ProductList>
      </S.ProductSection>
    )
  );
}
