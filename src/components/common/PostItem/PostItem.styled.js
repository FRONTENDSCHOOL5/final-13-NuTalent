import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import moreImg from '../../../assets/img/s-icon-more-vertical.svg';
import likeImg from '../../../assets/img/icon-heart.svg';
import messageImg from '../../../assets/img/icon-message-circle.svg';

export const PostArticle = styled.article`
  position: relative;
`;

export const PostContainer = styled.div`
  margin-left: 5.4rem;
  padding-top: 1.2rem;
`;

export const PostText = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 400;
`;

export const PostImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  margin-bottom: 1.2rem;
  border-radius: 1rem;
`;

export const PostButtons = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
  align-items: center;
  color: #767676;
`;

export const PostLike = styled.button`
  width: 2rem;
  height: 2rem;
  background: url(${likeImg}) no-repeat center / cover;
`;

export const PostMessage = styled(PostLike)`
  margin-left: 1rem;
  background: url(${messageImg}) no-repeat center / cover;
`;

export const PostSpan = styled.span`
  vertical-align: middle;
  font-size: 1.2rem;
  margin-left: 0.6rem;
`;

export const PostDate = styled.p`
  margin-bottom: 0.4rem;
  color: #767676;
`;

export const PostMore = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  right: 0;
  top: 0.4rem;
  background: url(${moreImg}) no-repeat center / cover;
`;

export const PostLink = styled(Link)`
  display: block;
`;
