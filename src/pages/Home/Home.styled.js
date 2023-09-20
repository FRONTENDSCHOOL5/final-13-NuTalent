import styled from 'styled-components';

const Container = styled.div`
  margin-top: 4.8rem;
  background-color: #fff;
  line-height: 1.2;
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
export { Container, NoFollowerWrap };
