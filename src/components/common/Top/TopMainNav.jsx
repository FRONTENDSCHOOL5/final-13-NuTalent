import React from 'react';
import { TopDiv, MainTitle, SearchLink } from './TopMainNav.styled';

export default function TopMainNav() {
  return (
    <TopDiv>
      <MainTitle>HOME</MainTitle>
      <SearchLink to="/search" />
    </TopDiv>
  );
}
