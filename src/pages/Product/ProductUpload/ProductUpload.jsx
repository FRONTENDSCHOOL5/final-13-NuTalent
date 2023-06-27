import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { recoilData } from '../../../recoil/atoms/dataState';

import TopUploadNav from '../../../components/common/Top/TopUploadNav';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import {
  ImgSpan,
  UploadFileInput,
  UploadFileLabel,
  AddProductContainer,
} from './ProductUpload.styled';

import { instance } from '../../../util/api/axiosInstance';
import { useState } from 'react';
import { loginState } from '../../../recoil/atoms/loginState';

export default function AddProduct() {
  const currentUSerData = useRecoilValue(recoilData);
  const token = useRecoilValue(loginState);

  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async () => {
    if (productName.length < 2) {
      alert('2글자 이상을 입력해 주세요!');
      return;
    }

    try {
      const user = JSON.stringify({
        product: {
          itemName: productName,
          price: Number(price.replaceAll(',', '')), //1원 이상
          link: link,
          itemImage: image,
        },
      });
      console.log(token);
      const res = await instance.post('/product', user, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      console.log(res);

      navigate(`/profile/${currentUSerData.accountname}`);
    } catch (error) {
      console.error(error);
      alert('상품 등록 실패');
    }
  };
  const imageValidation = (image) => {
    if (image.size > 10 * 1024 * 1024) {
      alert('10MB를 초과하는 이미지는 업로드 할 수 없습니다.');
      return false;
    } else if (!image.name.match(/(.*)\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i)) {
      alert(
        '이미지 파일(*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)만 업로드 할 수 있습니다.',
      );
      return false;
    } else {
      return true;
    }
  };
  const uploadHanlder = async (e) => {
    const selectedImg = e.target.files[0];
    console.log(selectedImg);
    if (!imageValidation(selectedImg)) return;

    const formData = new FormData();

    formData.append('image', selectedImg);

    const res = await instance.post('/image/uploadfile', formData);
    setImage(res.config.baseURL + '/' + res.data.filename);
    console.log(res);
  };

  // 여기부터 작성하겠습니다~
  const priceHandler = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replace(/,|[^0-9]/g, '')) || '';
    setPrice(removedCommaValue.toLocaleString());
  };

  return (
    <>
      <TopUploadNav
        size="ms"
        contents="저장"
        disabled={!(image && productName && price && link)}
        onClick={handleSubmit}
      />
      <AddProductContainer>
        <ImgSpan>이미지 등록</ImgSpan>
        <UploadFileLabel image={image} htmlFor="uploadImg" />
        <UploadFileInput type="file" id="uploadImg" onChange={uploadHanlder} />

        <TextActiveInput
          type="text"
          placeholder="2~15자 이내여야 합니다."
          value={productName}
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
          value={price}
          onChange={priceHandler}
        >
          가격
        </TextActiveInput>
        <TextActiveInput
          type="text"
          placeholder="URL을 입력해 주세요."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        >
          판매 링크
        </TextActiveInput>
      </AddProductContainer>
    </>
  );
}
