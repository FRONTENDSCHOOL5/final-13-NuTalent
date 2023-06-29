import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextActiveInput from '../../../components/common/TextActiveInput/TextActiveInput';
import StyledBtn from '../../../components/common/Button/Button';
import { instance } from '../../../util/api/axiosInstance';
import {
  JoinMembersWrap,
  PageH2,
  TextInputBox,
  ErrorMessage,
} from './SignUp.styled';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [emailResponseMessage, setEmailResponseMessage] = useState('');
  const [passwordResponseMessage, setPasswordResponseMessage] = useState('');
  const navigate = useNavigate();
  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;

  const validateEmail = (e) => {
    const currentEmail = e.currentTarget.value;
    setEmail(currentEmail);
  };

  const validatePassword = (e) => {
    const currentPassword = e.currentTarget.value;
    setPassword(currentPassword);
  };

  // focus 잃으면 이메일 유효성 검사
  const onEmailBlur = () => {
    if (emailPattern.test(email)) {
      setIsEmailError(false);
      setEmailResponseMessage('');
    } else {
      setIsEmailError(true);
      setEmailResponseMessage('*이메일 형식이 맞지 않습니다.');
    }
  };
  // focus 잃으면 비밀번호 유효성 검사
  const onPasswordBlur = () => {
    if (password.length < 6) {
      setIsPasswordError(true);
      setPasswordResponseMessage('*비밀번호는 6자 이상이어야 합니다.');
    } else {
      setIsPasswordError(false);
      setPasswordResponseMessage('');
    }
  };

  const handleSubmit = async () => {
    if (isEmailError || isPasswordError) return;

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

      if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
        setIsEmailError(true);
        setEmailResponseMessage(`*${res.data.message}`);
      } else {
        console.log('이메일 중복 여부 통신 성공');
        navigate('/signUp/profile', {
          state: {
            email: email,
            password: password,
          },
        });
      }
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
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
          onBlur={onEmailBlur}
        >
          이메일
        </TextActiveInput>
        {/* emailResponseMessage 들어가는 값: res.data.message */}
        {isEmailError && <ErrorMessage>{emailResponseMessage}</ErrorMessage>}
        <TextActiveInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={validatePassword}
          onBlur={onPasswordBlur}
        >
          비밀번호
        </TextActiveInput>
        {isPasswordError && (
          <ErrorMessage>{passwordResponseMessage}</ErrorMessage>
        )}
      </TextInputBox>
      <StyledBtn
        // to="/signUp/profile"
        onClick={handleSubmit}
        disabled={isEmailError || isPasswordError}
      >
        다음
      </StyledBtn>
    </JoinMembersWrap>
  );
}
