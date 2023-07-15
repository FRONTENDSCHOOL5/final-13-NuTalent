import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';

const TopDiv = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  border-bottom: 0.05rem solid var(--sub-grey);
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 10;
`;
const ArrowLeftBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  margin: 1.3rem 0;
  background-image: url(${arrowLeft});
`;
export { TopDiv, ArrowLeftBtn };
