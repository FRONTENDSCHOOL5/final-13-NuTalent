import React from 'react';
import { InputEmail } from './TextActiveInput.styled';

export default function TextActiveInput({ children, ...props }) {
  return (
    <>
      <InputEmail>
        <label>{children}</label>
        <input {...props} />
      </InputEmail>
    </>
  );
}
