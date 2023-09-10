import {
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { instance } from '../../util/api/axiosInstance';

const getInfiniteComments = async (id, skip = 0) => {
  const { data } = await instance.get(
    `/post/${id}/comments/?limit=10&skip=${skip}`,
  );
  return data.comments;
};
const createComment = async (id, comment) => {
  const { data } = await instance.post(`/post/${id}/comments`, { comment });
  return data.comment;
};
const reportComment = async (id, commentId) => {
  const { data } = await instance.post(
    `/post/${id}/comments/${commentId}/report`,
  );
  return data;
};
const deleteComment = async (id, commentId) => {
  const { data } = await instance.delete(`/post/${id}/comments/${commentId}`);
  return data;
};

export const useGetInfiniteComments = (id) => {
  const {
    data: comments,
    fetchNextPage: fetchNextComments,
    hasNextPage: hasNextComments,
  } = useInfiniteQuery({
    queryKey: ['comments', id],
    queryFn: ({ pageParam }) => getInfiniteComments(id, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return;
      return allPages.length * 10;
    },
    placeholderData: [],
  });
  return { comments, fetchNextComments, hasNextComments };
};

export const useReportComment = (id) => {
  const { mutate: createReportCommentMutate } = useMutation({
    mutationFn: (commentId) => reportComment(id, commentId),
    onSuccess: () => {
      alert(`신고가 완료되었습니다.`);
    },
  });

  return { createReportCommentMutate };
};
export const useCreateComment = (id) => {
  const queryClient = useQueryClient();

  const { mutate: createCommentMutate } = useMutation({
    mutationFn: (comment) => createComment(id, comment),
    onSuccess: (res) => {
      queryClient.setQueryData(['comments', id], (oldData) => {
        const oldPages = oldData.pages;
        const newPages = oldPages.map((page, index) =>
          index === 0 ? [res, ...page] : page,
        );
        return { ...oldData, pages: newPages };
      });
    },
  });

  return { createCommentMutate };
};

export const useDeleteComment = (id) => {
  const queryClient = useQueryClient();

  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: (commentId) => deleteComment(id, commentId),
    onSuccess: (_, commentId) => {
      queryClient.setQueryData(['comments', id], (oldData) => {
        const oldPages = oldData.pages;
        const newPages = oldPages.map((page) =>
          page.filter((comment) => comment.id !== commentId),
        );
        return { ...oldData, pages: newPages };
      });
    },
  });
  return { deleteCommentMutate };
};
