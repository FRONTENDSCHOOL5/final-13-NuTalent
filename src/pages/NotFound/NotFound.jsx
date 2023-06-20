import React from 'react';
import errorImg from '../../assets/img/404.svg';
import StyledBtn from '../../components/common/Button/Button';
import NotFoundPageWrap from './NotFound.styled';

export default function NotFound() {
  return (
    <div>
      <NotFoundPageWrap>
        <img src={errorImg} alt="404이미지" />
        <p>페이지를 찾을 수 없습니다. &#58;&#40; </p>
        <StyledBtn width="10rem">이전 페이지</StyledBtn>
      </NotFoundPageWrap>
    </div>
  );
}
