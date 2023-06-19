import React from 'react';
import Button from './Button.styled';

export default function StyleLBtn({ contents, size, onClick, disabled }) {
  return (
    <Button size={size} onClick={onClick} disabled={disabled}>
      {contents}
    </Button>
  );
}
