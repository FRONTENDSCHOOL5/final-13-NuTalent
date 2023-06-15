import styled from 'styled-components';

const TabMenuUl = styled.ul`
  width: 39rem;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const TabMenuLi = styled.li`
  width: 8.4rem;
  display: inline-block;
  text-align: center;
  & > img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export { TabMenuUl, TabMenuLi };
