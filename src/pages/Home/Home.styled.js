import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  line-height: 1.2;
`;

const ContainerUl = styled.ul`
  min-width: 32rem;
  max-width: 64rem;
  margin: 0 auto;
  padding: 6.8rem 1.6rem;
`;
const ContainerLi = styled.li`
  list-style: none;
  margin-bottom: 2.4rem;
`;
const NoFollowerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 27.4rem;
  gap: 2rem;
  img {
    width: 19.6rem;
    margin-left: 2rem;
  }
  p {
    font-size: 1.4rem;
    color: #767676;
  }
`;
export { Container, ContainerUl, ContainerLi, NoFollowerWrap };
