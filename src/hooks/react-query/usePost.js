// import { useMemo } from 'react';
import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { instance } from '../../util/api/axiosInstance';

const getPost = async (postId) => {
  const { data } = await instance.get(`/post/${postId}`);
  return data.post;
};

const getInfinitePosts = async (accountname, postType, skip = 0) => {
  const path =
    postType === 'userpost' ? `/post/${accountname}/userpost` : '/post/feed';

  const { data } = await instance.get(`${path}/?limit=5&skip=${skip}`);
  return postType === 'userpost' ? data.post : data.posts;
};

const createPost = async (post) => {
  const { data } = await instance.post('/post', { post });
  return data;
};

const updatePost = async (postId, post) => {
  const { data } = await instance.put(`/post/${postId}`, { post });
  return data;
};

const deletePost = async (postId) => {
  const { data } = await instance.delete(`/post/${postId}`);
  return data;
};
const reportPost = async (postId) => {
  const { data } = await instance.post(`/post/${postId}/report`);
  return data;
};

export const useGetPost = (postId) => {
  const { data: post } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
  });

  return { post };
};

export const useGetInfinitePosts = (accountname, postType) => {
  const {
    data: posts,
    fetchNextPage: fetchNextPosts,
    hasNextPage: hasNextPosts,
  } = useInfiniteQuery({
    queryKey: ['post', accountname, postType],
    queryFn: ({ pageParam }) =>
      getInfinitePosts(accountname, postType, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return;
      return allPages.length * 5;
    },
    placeholderData: [],
  });

  return { posts, fetchNextPosts, hasNextPosts };
};

export const useCreatePost = () => {
  const navigate = useNavigate();

  const { mutate: createPostMutate } = useMutation({
    mutationFn: (post) => createPost(post),
    onSuccess: (res) => navigate(`/post/${res.post.id}`),
  });

  return { createPostMutate };
};

export const useUpdatePost = (postId) => {
  const navigate = useNavigate();

  const { mutate: updatePostMutate } = useMutation({
    mutationFn: (post) => updatePost(postId, post),
    onSuccess: (res) => navigate(`/post/${res.post.id}`),
  });

  return { updatePostMutate };
};

export const useDeletePost = (accountname) => {
  const queryClient = useQueryClient();

  const { mutate: deletePostMutate } = useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: (_, postId) => {
      queryClient.setQueryData(['post', accountname, 'userpost'], (oldData) => {
        console.log(oldData);
        const oldPages = oldData.pages;
        const newPages = oldPages.map((page) =>
          page.filter((post) => post.id !== postId),
        );
        return { ...oldData, pages: newPages };
      });
    },
  });
  return { deletePostMutate };
};

export const useReportPost = (postId) => {
  const { mutate: reportPostMutate } = useMutation({
    mutationFn: () => reportPost(postId),
    onSuccess: () => {
      alert(`신고가 완료되었습니다.`);
    },
  });
  return { reportPostMutate };
};
