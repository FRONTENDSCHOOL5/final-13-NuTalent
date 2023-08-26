import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '../../util/api/axiosInstance';

const follow = async (accountname) => {
  const res = await instance.post(`/profile/${accountname}/follow`);
  return res;
};

const unfollow = async (accountname) => {
  const res = await instance.delete(`/profile/${accountname}/unfollow`);
  return res;
};

export const useToggleFollow = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleFollowMutate } = useMutation({
    mutationFn: (profile) => (profile.isfollow ? unfollow(profile.accountname) : follow(profile.accountname)),
    onSuccess: (res) => {
      const profile = res.data.profile;
      queryClient.setQueryData(["profile", profile.accountname], profile);
    },
  });
  return { toggleFollowMutate };
};
