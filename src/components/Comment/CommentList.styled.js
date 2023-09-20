import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import optionImg from '../../assets/img/icon-more-vertical.svg';

export const CommentUl = styled.ul`
  display: block;
  height: 100%;
  padding: 2rem 1.6rem;
  list-style: none;
  border-top: 0.1rem solid var(--sub-grey);
`;
export const CommentLi = styled.li`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;

  &:last-child {
    margin-bottom: 6.1rem;
  }
  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding-top: 0.6rem;
    h2 {
      font-size: 1.4rem;
      font-weight: 500;

      span {
        margin-left: 1rem;
        font-size: 0.6rem;
        font-weight: 400;
        color: var(--main-grey);
      }
    }
    p {
      color: #333;
      font-weight: 400;
      word-break: break-all;
      line-height: 1.8rem;
    }
  }
  button {
    width: 2rem;
    height: 2rem;
    margin-left: auto;
    background-color: inherit;
    border: none;
    background: url(${optionImg}) no-repeat center / contain;
  }
`;
export const PostDetailLink = styled(Link)`
  gap: 1.2rem;
  display: block;
`;
