import { css, styled } from 'styled-components';

import listViewOn from '../../assets/img/icon-post-list-on.svg';
import listViewOff from '../../assets/img/icon-post-list-off.svg';
import AlbumViewOn from '../../assets/img/icon-post-album-on.svg';
import AlbumViewOff from '../../assets/img/icon-post-album-off.svg';

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
        props.$viewType === 'list'
          ? `url(${listViewOn})`
          : `url(${listViewOff})`}
      no-repeat center;
  }

  &:last-child {
    background: ${(props) =>
        props.$viewType === 'album'
          ? `url(${AlbumViewOn})`
          : `url(${AlbumViewOff})`}
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

  ${(props) => (props.$viewType === 'list' ? listView : albumView)}
`;

export const AlbumImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;
