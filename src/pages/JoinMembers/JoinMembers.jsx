import React, { useState } from 'react';
import TextActiveInput from '../../components/common/TextActiveInput/TextActiveInput';
import StyledBtn from '../../components/common/Button/Button';
import { instance } from '../../util/api/axiosInstance';
import {
  JoinMembersWrap,
  PageH2,
  TextInputBox,
  ErrorMessage,
} from './JoinMembers.styled';

export default function JoinMembersPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [emailResponseMessage, setEmailResponseMessage] = useState('');
  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;

  // 이메일 유효성 검사
  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (emailPattern.test(email)) {
      setEmailResponseMessage('');
    } else {
      setEmailResponseMessage('이메일 형식이 맞지 않습니다.');
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 6) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  };

  const handleSubmit = async () => {
    if (emailResponseMessage !== '' && isPasswordError !== true) return;

    try {
      // console.log(email);
      const user = JSON.stringify({
        user: {
          email: email,
        },
      });

      //비동기통신
      const res = await instance.post('/user/emailvalid', user, {
        headers: { 'Content-type': 'application/json' },
      });
      console.log('res', res);
      console.log(res.data);
      setEmailResponseMessage(res.data.message);
      console.log('성공');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <JoinMembersWrap>
      <PageH2>이메일로 회원가입</PageH2>
      <TextInputBox>
        <TextActiveInput
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={validateEmail}
          onBlur={validateEmail}
        >
          이메일
        </TextActiveInput>
        {/* emailResponseMessage 들어가는 값: res.data.message */}
        {emailResponseMessage && (
          <ErrorMessage>{emailResponseMessage}</ErrorMessage>
        )}
        <TextActiveInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={validatePassword}
        >
          비밀번호
        </TextActiveInput>
        {isPasswordError && (
          <ErrorMessage>비밀번호는 6자 이상이어야 합니다.</ErrorMessage>
        )}
      </TextInputBox>

      <StyledBtn
        onClick={handleSubmit}
        disabled={isPasswordError || emailResponseMessage}
      >
        다음
      </StyledBtn>
    </JoinMembersWrap>
  );
}
