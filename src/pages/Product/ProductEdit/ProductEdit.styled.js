import { styled } from 'styled-components';
import UploadFileButton from '../../../assets/img/img-button.svg';

export const AddProductContainer = styled.div`
  width: 100%;
  padding: 3rem 3.4rem;
`;

export const UploadFileLabel = styled.label`
  display: block;
  position: relative;
  width: 32.2rem;
  height: 20.4rem;
  border-radius: 1rem;
  margin: 0 auto 3rem;
  background: ${(props) =>
      props.image ? `url(${props.image})` : `var(--sub-grey)`}
    no-repeat center / contain;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 2rem;
    right: 1.6rem;
    width: 3.6rem;
    height: 3.6rem;
    background: url(${UploadFileButton}) no-repeat 0 0 / contain;
  }
`;

export const UploadFileInput = styled.input`
  display: none;
`;

export const ImgSpan = styled.span`
  display: inline-block;
  width: 100%;
  color: var(--main-grey);
  font-size: 12px;
  margin-bottom: 1.8rem;
  text-align: center;
`;
