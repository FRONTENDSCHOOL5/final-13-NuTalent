import React, { useState, useEffect } from 'react';
import PostItem from '../../components/common/PostItem/PostItem';

import useScrollBottom from '../../hooks/useScrollBottom';

import * as S from './PostList.styled';

export default function PostList({
  posts,
  hasViewController = false,
  fetchNextPosts,
  deletePost,
}) {
  const [viewType, setViewType] = useState('list');

  const isBottom = useScrollBottom();
  useEffect(() => {
    if (isBottom) {
      fetchNextPosts();
    }
  }, [isBottom]);

  return (
    <div>
      {hasViewController && (
        <S.PostTop>
          <S.viewButton
            $viewType={viewType}
            type="button"
            onClick={() => setViewType('list')}
          ></S.viewButton>
          <S.viewButton
            $viewType={viewType}
            type="button"
            onClick={() => setViewType('album')}
          ></S.viewButton>
        </S.PostTop>
      )}
      <S.PostList $viewType={viewType}>
        {posts?.map((postData) => {
          return postData?.map((post) => {
            return viewType === 'list' ? (
              <li key={post.id}>
                <PostItem
                  postData={post}
                  onDeletePost={() => deletePost(post.id)}
                />
              </li>
            ) : (
              post.image && (
                <li key={post.id}>
                  <S.AlbumImg src={post.image} alt="" />
                </li>
              )
            );
          });
        })}
      </S.PostList>
    </div>
  );
}
