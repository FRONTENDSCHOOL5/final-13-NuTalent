import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import BottomSheetModal from '../BottomSheetModal/BottomSheetModal';
import { ItemBox } from './ProductItem.styled';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useAlert } from '../../../hooks/useModal';

export default function ProductItem({
  productId,
  accountname,
  itemName,
  price,
  link,
  itemImg,
  onDelete,
}) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { openAlert } = useAlert();

  const currentUserData = useRecoilValue(recoilData);
  const isMyProduct = currentUserData.accountname === accountname;

  const bottomSheetHandler = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (isBottomSheetOpen && bottomSheetRef.current) {
      console.log(bottomSheetRef);
      console.log(bottomSheetRef.current);
      bottomSheetRef.current.focus();
    }
  }, [isBottomSheetOpen]);

  return (
    <>
      <ItemBox onClick={() => setIsBottomSheetOpen(true)}>
        <img src={itemImg} alt="상품 사진" />
        <h1>
          {itemName}
          <span className="tooltip">{itemName}</span>
        </h1>
        <p>{price.toLocaleString()}원</p>
      </ItemBox>
      <BottomSheetModal
        isOpen={isBottomSheetOpen}
        bottomSheetHandler={bottomSheetHandler}
      >
        {isMyProduct ? (
          <>
            <button
              ref={bottomSheetRef}
              onClick={() => {
                setIsBottomSheetOpen(false);
                openAlert({
                  title: '상품을 삭제할까요?',
                  actionText: '삭제',
                  actionFunction: onDelete,
                });
              }}
            >
              삭제
            </button>
            <Link to={`/product/edit/${productId}`}>수정</Link>
            <a href={link} target="_blank" rel="noopener noreferrer">
              웹사이트에서 상품 보기
            </a>
          </>
        ) : (
          <>
            <a href={link}>웹사이트에서 상품 보기</a>
            <button
              onClick={() =>
                openAlert({
                  title: '상품을 신고할까요?',
                  actionText: '신고',
                  actionFunction: () => alert('신고가 완료되었습니다.'),
                })
              }
            >
              신고하기
            </button>
          </>
        )}
      </BottomSheetModal>
    </>
  );
}
