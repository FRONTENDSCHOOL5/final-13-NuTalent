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
        <h1>{itemName}</h1>
        <p>{price}</p>
      </ItemBox>
      <BottomSheetModal
        isOpen={isBottomSheetOpen}
        bottomSheetHandler={bottomSheetHandler}
      >
        {/* 프래그먼트로 감싸면 li가 한개만 들어가네... */}
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
            <button>웹사이트에서 상품 보기</button>
          </>
        ) : (
          <button>신고하기</button>
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
