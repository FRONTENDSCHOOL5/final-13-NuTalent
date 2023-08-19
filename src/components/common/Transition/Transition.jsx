import React from 'react';

import * as S from './Transition.styled';

export default function Transition({
  isOpen,
  transitionStyle = 'fade',
  duration = 300,
  children,
}) {
  return (
    <S.TransitionContainer
      $transitionStyle={transitionStyle}
      $duration={duration}
      $isOpen={isOpen}
    >
      {children}
    </S.TransitionContainer>
  );
}
