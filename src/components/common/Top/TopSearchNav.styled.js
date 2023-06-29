import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';

const TopDiv = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0 1.6rem;
  gap: 2rem;
  border-bottom: 0.05rem solid var(--sub-grey);
  background-color: white;
  z-index: 10;
  top: 0;
  left: 0;
`;
const ArrowLeftBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background: url(${arrowLeft}) no-repeat 0 0 / contain;
  flex-shrink: 0;
`;
const SearchInp = styled.input`
  background: #f2f2f2;
  border-radius: 3.2rem;
  width: 100%;
  height: 3.2rem;

  padding-left: 1.6rem;

  &::placeholder {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #c4c4c4;
  }
`;
export { TopDiv, ArrowLeftBtn, SearchInp };
