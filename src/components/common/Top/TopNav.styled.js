import styled from 'styled-components';
import { Link } from 'react-router-dom';

import arrowLeft from '../../../assets/img/icon-arrow-left.svg';
import optionImg from '../../../assets/img/icon-more-vertical.svg';
import searchImg from '../../../assets/img/icon-search.svg';

export const TopDiv = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  border-bottom: 0.05rem solid var(--sub-grey);
  position: fixed;
  background-color: white;
  z-index: 10;
  left: 0;
  top: 0;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: ${({ $size }) => ($size === 'sm' ? '1.4rem' : '1.8rem')};
  font-weight: bolder;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  background: #f2f2f2;
  border-radius: 3.2rem;
  width: 100%;
  height: 3.2rem;
  padding-left: 1.6rem;
  margin-left: 1rem;

  &::placeholder {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #c4c4c4;
  }
`;

export const BackButton = styled.button`
  background-color: inherit;
  border: none;
  width: 2.2rem;
  height: 2.2rem;
  background-image: url(${arrowLeft});
`;

export const OptionButton = styled.button`
  background-color: inherit;
  border: none;
  width: 2.4rem;
  height: 2.4rem;
  background: url(${optionImg}) no-repeat center / contain;
`;

export const ArrowLeftBtnText = styled.span`
  margin-right: auto;
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export const SearchButton = styled(Link)`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${searchImg});
`;
