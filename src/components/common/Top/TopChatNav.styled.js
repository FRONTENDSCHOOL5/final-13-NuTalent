import styled from 'styled-components';
import arrowLeft from '../../../assets/img/icon-arrow-left.svg';
import optionImg from '../../../assets/img/icon-more-vertical.svg';

const TopDiv = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.6rem;
  gap: 2rem;
  border-bottom: 0.05rem solid var(--sub-grey);
  position: fixed;
  background-color: white;
  z-index: 10;
`;
const ArrowLeftBtn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background-image: url(${arrowLeft});
`;
const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

const OptionBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${optionImg}) no-repeat 0 0 / contain;
  margin-left: auto;
`;

export { TopDiv, ArrowLeftBtn, MainTitle, OptionBtn };
