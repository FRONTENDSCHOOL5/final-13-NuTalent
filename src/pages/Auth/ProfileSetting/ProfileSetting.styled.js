import { styled } from 'styled-components';
import StyledBtn from '../../../components/common/Button/Button';

const JoinMembersWrap = styled.div`
  margin: 5.4rem 3.4rem;
`;

const PageH2 = styled.h2`
  font-size: 2.4rem;
  text-align: center;
`;

const PageDescription = styled.p`
  font-size: 1.4rem;
  color: #767676;
  text-align: center;
  margin-top: 1.2rem;
`;

const ImageWrapper = styled.div`
  width: 11rem;
  height: 11rem;
  margin: 3rem auto;
  position: relative;
`;

const DefaultProfileImg = styled.img`
  width: 100%;
`;

const ProfileUploadImg = styled.img`
  position: absolute;
  width: 3.6rem;
  transform: translate(-100%, 200%);
`;

const JoinMembersNextButton = styled(StyledBtn)`
  margin-top: 1.4rem;
`;

const TextInputBox = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const ErrorMessage = styled.p`
  color: #eb5757;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

export { JoinMembersWrap, PageH2, PageDescription, ImageWrapper, DefaultProfileImg, ProfileUploadImg, JoinMembersNextButton, TextInputBox, ErrorMessage };