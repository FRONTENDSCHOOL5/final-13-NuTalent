import React from 'react';

import StyledBtn from '../Button/Button';

import * as S from './TagBar.styled';

export default function TagBar({ tagList, selectedTag, selectTag }) {
  return (
    <S.Container>
      <S.List>
        {tagList.map((tag) => (
          <li key={tag}>
            <StyledBtn
              onClick={(e) => selectTag(e.target.innerText)}
              color={tag === selectedTag ? 'fill' : 'outline'}
              size="s"
            >
              {tag}
            </StyledBtn>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
}
