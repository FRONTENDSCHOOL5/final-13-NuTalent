import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 4.8rem 0;
  position: relative;
`;

export const ChatList = styled.ul`
  padding: 2.4rem 1.6rem;

  & > li {
    margin-bottom: 2rem;
  }
`;

export const UnreadMarker = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: var(--sub-purple);
  position: absolute;
`;

export const ChatItem = styled(Link)`
  display: flex;
  gap: 1.2rem;
`;

export const UserImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const ChatWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const UserName = styled.p`
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 700;
`;

export const ChatContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

export const ChatText = styled.span`
  flex-grow: 1;
  font-size: 1.2rem;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 0;
`;

export const ChatTime = styled.time`
  color: var(--sub-grey);
  vertical-align: baseline;
`;
