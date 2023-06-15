import React from 'react';
import TextActiveInput from '../../components/common/TextActiveInput/TextActiveInput';
import { StyleLBtn } from '../../components/common/Button/LButton';
import {
  JoinMembersWrap,
  PageH2,
  TextInputBox,
  ErrorMessage,
} from './JoinMembers.styled';

export default function JoinMembersPage() {
  return (
    <JoinMembersWrap>
      <PageH2>이메일로 회원가입</PageH2>
      <TextInputBox>
        <TextActiveInput type="email">이메일</TextActiveInput>
        <ErrorMessage>* 이미 가입된 이메일 주소입니다.</ErrorMessage>
        <TextActiveInput type="password">비밀번호</TextActiveInput>
        <ErrorMessage>* 비밀번호는 6자 이상이어야 합니다.</ErrorMessage>
      </TextInputBox>
      <StyleLBtn>다음</StyleLBtn>
    </JoinMembersWrap>
  );
}
