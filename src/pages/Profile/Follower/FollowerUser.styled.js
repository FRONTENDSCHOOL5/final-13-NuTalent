import { styled } from 'styled-components';

export const FollowerUserStyled = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 1.2rem;
  margin-bottom: 1.6rem;

  & > :first-child {
    flex-grow: 1;
  }
`;

export const FollowerUserImage = styled.img`
  width: ${(props) => (props.size === 'small' ? '4.2rem' : '5rem')};
  height: ${(props) => (props.size === 'small' ? '4.2rem' : '5rem')};
  border-radius: 50%;
  object-fit: cover;
`;

export const FollowerUserTextBox = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`;

export const FollowerUserIntro = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #767676;
  margin-top: 0.5rem;
`;

export const FollowerUserName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const BtnBox = styled.div`
  padding-right: 2rem;
  margin-top: auto;
  margin-bottom: auto;
`;
