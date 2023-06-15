import { styled } from 'styled-components';

export const UserStyled = styled.div`
  display: flex;
  width: 35.8rem;
  gap: 1.2rem;
`;

export const UserImage = styled.img`
  width: ${(props) => (props.size === 'small' ? '4.2rem' : '5rem')};
  height: ${(props) => (props.size === 'small' ? '4.2rem' : '5rem')};
  border-radius: 50%;
  object-fit: cover;
`;

export const UserDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const UserId = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--main-grey);
`;
