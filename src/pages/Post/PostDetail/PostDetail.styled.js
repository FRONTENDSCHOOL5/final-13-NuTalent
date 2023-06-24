import { styled } from 'styled-components';

export const PostItemWrapper = styled.div`
  min-width: 32rem;
  max-width: 64rem;
  margin: 0 auto;
  padding: 6.8rem 1.6rem 2rem;
  & a {
    cursor: default;
  }
  & img,
  div {
    cursor: pointer;
  }
`;
export const CommentUl = styled.ul`
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
`;

export const CommentBox = styled.div`
  width: 100%;
  height: 6.1rem;
  display: flex;
  gap: 1.8rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  padding: 0 1.6rem;
  position: fixed;
  bottom: 0;
  border-top: 0.1rem solid var(--sub-grey);
  background-color: #fff;

  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    object-fit: cover;
  }
  input {
    width: 100%;
    height: 1.8rem;
    &:focus {
      border-bottom: var(--main-purple) 0.1rem solid;
      outline: none;
    }
    &::placeholder {
      color: var(--sub-grey);
    }
  }
  button {
    width: 4.4rem;
    height: 4.4rem;
    text-align: right;
    color: var(--main-purple);

    &:disabled {
      color: var(--sub-grey);
    }
  }
`;
