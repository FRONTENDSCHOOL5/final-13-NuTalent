import { useMutation } from '@tanstack/react-query';

import { instance } from '../../util/api/axiosInstance';

const follow = async (accountname) => {
  const res = await instance.post(`/profile/${accountname}/follow`, null);
  return res;
};

const unfollow = async (accountname) => {
  const res = await instance.delete(`/profile/${accountname}/unfollow`);
  return res;
};

export const useToggleFollow = () => {
  const { mutate: toggleFollowMutate } = useMutation({
    mutationFn: (profile) => (profile.isfollow ? unfollow() : follow()),
    onSuccess: (data) => console.log(data),
  });
  return { toggleFollowMutate };
};
