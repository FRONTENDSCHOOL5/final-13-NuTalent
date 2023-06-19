import React from 'react';
import { InputEmail } from './TextActiveInput.styled';

export default function TextActiveInput(props) {
  return (
    <div>
      <InputEmail>
        <label>{props.children}</label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </InputEmail>
    </div>
  );
}
