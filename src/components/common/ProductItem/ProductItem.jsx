import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import BottomSheetModal from '../BottomSheetModal/BottomSheetModal';
import Alert from '../Alert/Alert';

import { ItemBox } from './ProductItem.styled';
import { recoilData } from '../../../recoil/atoms/dataState';

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
  const [isAlertOpen, setIsAlertOpen] = useState(false);

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
  }, [isBottomSheetOpen, isAlertOpen]);

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
                setIsAlertOpen(true);
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
            <button>신고하기</button>
          </>
        )}
      </BottomSheetModal>
      <Alert
        isOpen={isAlertOpen}
        title="상품을 삭제할까요?"
        cancel={() => setIsAlertOpen(false)}
        actionText="삭제"
        action={onDelete}
      />
    </>
  );
}
