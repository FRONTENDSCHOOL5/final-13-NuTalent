import React from 'react';
import { InputEmail } from './TextActiveInput.styled';

export default function TextActiveInput(props) {
  return (
    <div>
      <InputEmail>
        <label>{props.children}</label>
        <input type={props.type} placeholder="ip-time@gmail.com" required />
      </InputEmail>
    </div>
  );
}
