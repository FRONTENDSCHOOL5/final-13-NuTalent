import { styled } from 'styled-components';

export const FollowingUserStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
`;

export const FollowingUserImage = styled.img`
  width: ${(props) => (props.size === 'small' ? '4.2rem' : '5rem')};
  height: ${(props) => (props.size === 'small' ? '4.2rem' : '5rem')};
  border-radius: 50%;
  object-fit: cover;
`;

export const FollowingUserTextBox = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.5rem;
`;

export const FollowingUserIntro = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #767676;
`;

export const FollowingUserName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const BtnBox = styled.div`
  padding-right: 2rem;
  margin-left: auto;
  margin-top: 0.5rem;
`;
