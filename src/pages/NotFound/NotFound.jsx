import React from 'react';
import styled from 'styled-components';
import errorImg from '../../assets/img/404.svg';
import { StyleLBtn } from '../../components/common/Button/LButton.jsx';

const NotFoundPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 27.4rem;
  gap: 2rem;
  img {
    width: 19.6rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

export default function NotFound() {
  return (
    <div>
      <NotFoundPageWrap>
        <img src={errorImg} alt="404이미지" />
        <p>페이지를 찾을 수 없습니다. &#58;&#40; </p>
        <StyleLBtn width="10rem">이전 페이지</StyleLBtn>
      </NotFoundPageWrap>
    </div>
  );
}
