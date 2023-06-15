import React from 'react';
import Button from './Button.styled';

export default function StyleLBtn({ children, size }) {
  return <Button size={size}>{children}</Button>;
}
