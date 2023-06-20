import React from 'react';
import * as S from './Button.styled';

export default function StyledBtn({ children, size, width, to, ...props }) {
  if (to) {
    return (
      <S.StyledLink to={to} size={size} width={width} {...props}>
        {children}
      </S.StyledLink>
    );
  } else {
    return (
      <S.StyledButton size={size} width={width} {...props}>
        {children}
      </S.StyledButton>
    );
  }
}
