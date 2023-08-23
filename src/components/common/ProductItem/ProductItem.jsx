import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ItemBox } from './ProductItem.styled';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useAlert, useBottomSheet } from '../../../hooks/useModal';

export default function ProductItem({
  productId,
  accountname,
  itemName,
  price,
  link,
  itemImg,
  onDelete,
}) {
  const { openAlert } = useAlert();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const currentUserData = useRecoilValue(recoilData);
  const isMyProduct = currentUserData.accountname === accountname;

  return (
    <>
      <ItemBox
        onClick={() =>
          openBottomSheet(
            isMyProduct ? (
              <>
                <button
                  onClick={() => {
                    openAlert({
                      title: '상품을 삭제할까요?',
                      actionText: '삭제',
                      actionFunction: onDelete,
                    });
                    closeBottomSheet();
                  }}
                >
                  삭제
                </button>
                <Link
                  to={`/product/edit/${productId}`}
                  onClick={closeBottomSheet}
                >
                  수정
                </Link>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  웹사이트에서 상품 보기
                </a>
              </>
            ) : (
              <>
                <a href={link}>웹사이트에서 상품 보기</a>
                <button
                  onClick={() => {
                    openAlert({
                      title: '상품을 신고할까요?',
                      actionText: '신고',
                      actionFunction: () => alert('신고가 완료되었습니다.'),
                    });
                    closeBottomSheet();
                  }}
                >
                  신고하기
                </button>
              </>
            ),
          )
        }
      >
        <img src={itemImg} alt="상품 사진" />
        <h1>
          {itemName}
          <span className="tooltip">{itemName}</span>
        </h1>
        <p>{price.toLocaleString()}원</p>
      </ItemBox>
    </>
  );
}
