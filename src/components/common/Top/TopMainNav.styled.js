import styled from 'styled-components';
// import searchImg from '../../../assets/img/icon-search.svg';
// import { Link } from 'react-router-dom';

const TopDiv = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  border-bottom: 0.05rem solid var(--sub-grey);
  position: fixed;
`;
const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  font-weight: bolder;
`;
// const SearchLink = styled(Link)`
//   width: 2.4rem;
//   height: 2.4rem;
//   background-image: url(${searchImg});
// `;
export { TopDiv, MainTitle };
