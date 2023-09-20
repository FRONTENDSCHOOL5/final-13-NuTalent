// Profile section
import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';

import messageIcon from '../../assets/img/icon-message-circle.svg';
import shareIcon from '../../assets/img/icon-share.svg';

export const ProfileSection = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin-bottom: 1.6rem;
`;

export const ProfileImg = styled.img`
  width: 11rem;
  height: 11rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const followLink = styled(Link)`
  display: inline-block;

  & > p:first-child {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  & > p:last-child {
    color: var(--main-grey);
  }
`;

export const UserName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const UserId = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.6rem;
  font-size: 1.2rem;
  color: var(--main-grey);
`;

export const UserIntro = styled.p`
  margin-bottom: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  color: var(--main-grey);
  padding: 0 10rem;
`;

export const UserBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const circleBtn = css`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border: 0.1rem solid var(--sub-grey);
`;

export const messageButton = styled(Link)`
  ${circleBtn}
  background: url(${messageIcon}) no-repeat center;
`;

export const shareButton = styled.button`
  ${circleBtn}
  background: url(${shareIcon}) no-repeat center;
  cursor: pointer;
`;
