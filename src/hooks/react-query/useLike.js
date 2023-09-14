import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../util/api/axiosInstance';

const like = async (postId) => {
  const { data } = await instance.post(`/post/${postId}/heart`);
  return data.post;
};
const deleteLike = async (postId) => {
  const { data } = await instance.delete(`/post/${postId}/unheart`);
  return data.post;
};

export const useLike = () => {
  const queryClient = useQueryClient();

  const { mutate: likeMutate } = useMutation({
    mutationFn: (postId) => like(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['post']);
    },
  });

  return { likeMutate };
};

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteLikeMutate } = useMutation({
    mutationFn: (postId) => deleteLike(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['post']);
    },
  });
  return { deleteLikeMutate };
};
