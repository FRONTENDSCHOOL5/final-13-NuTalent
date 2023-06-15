import React from 'react';

// import TopUploadNav from '../../../components/common/Top/TopUploadNav';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import Button from '../../../components/common/Button/Button';

export default function AddProduct() {
  return (
    <>
      {/* <TopUploadNav /> */}
      <TextActiveInput>상품명</TextActiveInput>
      <TextActiveInput>가격</TextActiveInput>
      <TextActiveInput>판매 링크</TextActiveInput>
      <Button size="l">확인</Button>
      <Button size="m">확인</Button>
      <Button size="ms">확인</Button>
      <Button size="s">확인</Button>
      <Button disabled size="l">
        확인
      </Button>
      <Button disabled size="m">
        확인
      </Button>
      <Button disabled size="ms">
        확인
      </Button>
      <Button disabled size="s">
        확인
      </Button>
    </>
  );
}
