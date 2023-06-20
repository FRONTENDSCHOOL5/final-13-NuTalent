import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TabMenuUl = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 0.05rem solid var(--sub-grey);
`;

const TabMenuLi = styled.li`
  flex: 1 0 0;
  text-align: center;
`;

const TabMenuLiLink = styled(Link)`
  display: block;

  & > img {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.4rem;
  }
`;

export { TabMenuUl, TabMenuLi, TabMenuLiLink };
