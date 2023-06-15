import styled from 'styled-components';

const LBtnBasic = styled.button`
  background-color: #7149c6;
  border-radius: 4.4rem;
  height: 4.4rem;
  width: ${(props) => props.width || '100%'};
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`;

const LBtnDisabled = styled.button`
  background-color: #ada2ff;
  border-radius: 4.4rem;
  height: 4.4rem;
  width: ${(props) => props.width || '100%'};
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
`;
export { LBtnBasic, LBtnDisabled };
