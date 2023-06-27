import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';

import messageIcon from '../../../assets/img/icon-message-circle.svg';
import shareIcon from '../../../assets/img/icon-share.svg';
import listViewOn from '../../../assets/img/icon-post-list-on.svg';
import listViewOff from '../../../assets/img/icon-post-list-off.svg';
import AlbumViewOn from '../../../assets/img/icon-post-album-on.svg';
import AlbumViewOff from '../../../assets/img/icon-post-album-off.svg';

export const Container = styled.div`
  background-color: #f2f2f2;
  line-height: 1.2;
  padding: 4.8rem 0;

  & > * {
    margin-bottom: 1rem;
    background-color: #fff;
    border-width: 0.05rem 0;
    border-color: var(--sub-grey);
    border-style: solid;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// Profile section
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
  margin-bottom: 1.6rem;
  font-size: 1.2rem;
  color: var(--main-grey);
`;

export const UserIntro = styled.p`
  margin-bottom: 2.4rem;
  font-size: 1.4rem;
  color: var(--main-grey);
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
`;

// Product section
export const ProductSection = styled.section`
  padding: 2rem 1.6rem;
`;

export const StyledH2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 0.5rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// Post section
export const PostSection = styled.section``;

export const PostTop = styled.div`
  height: 4.4rem;
  padding: 0.9rem 1.6rem;
  border-bottom: 0.05rem solid var(--sub-grey);
  display: flex;
  gap: 1.6rem;
`;

export const viewButton = styled.button`
  width: 2.6rem;
  height: 2.6rem;

  &:first-child {
    margin-left: auto;
    background: ${(props) =>
    props.view === 'list' ? `url(${listViewOn})` : `url(${listViewOff})`}
      no-repeat center;
  }

  &:last-child {
    background: ${(props) =>
    props.view === 'album' ? `url(${AlbumViewOn})` : `url(${AlbumViewOff})`}
      no-repeat center;
  }
`;

const listView = css`
  & > li {
    margin-bottom: 2rem;
  }
`;

const albumView = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
`;

export const PostList = styled.ul`
  padding: 1.6rem;
  min-width: 32rem;
  max-width: 64rem;
  margin: 0 auto;

  ${(props) => (props.view === 'list' ? listView : albumView)}
`;

export const AlbumImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;
