import React, { useState } from 'react';
import { CommentBox } from './CommentUpload.styled';

export default function CommentUpload({ image, createCommentMutate }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [content, setContent] = useState('');
  return (
    <CommentBox
      onSubmit={(e) => {
        e.preventDefault();
        createCommentMutate({ content: content });
        setContent('');
        setIsDisabled(true);
      }}
    >
      <img src={image} alt="프로필 이미지" />
      <input
        type="text"
        placeholder="댓글 입력하기"
        onChange={(e) => {
          setIsDisabled(false);
          setContent(e.target.value);
        }}
        value={content}
      />
      <button type="submit" disabled={isDisabled}>
        게시
      </button>
    </CommentBox>
  );
}
