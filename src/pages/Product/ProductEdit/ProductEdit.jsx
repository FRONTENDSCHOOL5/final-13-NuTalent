import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StyledBtn from '../../../components/common/Button/Button';
import TopNav from '../../../components/common/Top/TopNav';
import { useUpdateProduct } from '../../../hooks/react-query/useProduct';
import { useGetDetailProducts } from '../../../hooks/react-query/useProduct';
import { useUploadImage } from '../../../hooks/react-query/useImage';

import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import {
  ImgSpan,
  UploadFileInput,
  UploadFileLabel,
  AddProductContainer,
} from './ProductEdit.styled';

export default function AddProduct() {
  const { id } = useParams();
  const { products } = useGetDetailProducts(id);
  const { updateProductMutate } = useUpdateProduct(id);
  const { uploadedImage, handleImageChange } = useUploadImage();

  const [image, setImage] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setImage(products.itemImage);
    setProductName(products.itemName);
    setPrice(Number(products.price).toLocaleString());
    setLink(products.link);
  }, [products]);

  useEffect(() => {
    if (uploadedImage) {
      setImage(uploadedImage);
    }
  }, [uploadedImage]);

  const handleSubmit = async () => {
    if (productName.length < 2) {
      alert('2글자 이상을 입력해 주세요!');
      return;
    }
    updateProductMutate({
      itemName: productName,
      price: Number(price.replaceAll(',', '')),
      link: link,
      itemImage: image,
    });
  };

  // 여기부터 작성하겠습니다~
  const priceHandler = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replace(/,|[^0-9]/g, '')) || '';
    setPrice(removedCommaValue.toLocaleString());
  };

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <StyledBtn
          size="ms"
          disabled={!(image && productName && price && link)}
          onClick={handleSubmit}
        >
          저장
        </StyledBtn>
      </TopNav>
      <AddProductContainer>
        <ImgSpan>이미지 등록</ImgSpan>
        <UploadFileLabel image={image} htmlFor="uploadImg" />
        <UploadFileInput
          type="file"
          id="uploadImg"
          onChange={handleImageChange}
        />

        <TextActiveInput
          type="text"
          placeholder="2~15자 이내여야 합니다."
          value={productName || ''}
          onChange={(e) => setProductName(e.target.value)}
          minLength={'2'}
          maxLength={'15'}
          required
        >
          상품명
        </TextActiveInput>
        <TextActiveInput
          type="text"
          placeholder="숫자만 입력 가능합니다."
          value={price || ''}
          onChange={priceHandler}
        >
          가격
        </TextActiveInput>
        <TextActiveInput
          type="text"
          placeholder="URL을 입력해 주세요."
          value={link || ''}
          onChange={(e) => setLink(e.target.value)}
        >
          판매 링크
        </TextActiveInput>
      </AddProductContainer>
    </>
  );
}
