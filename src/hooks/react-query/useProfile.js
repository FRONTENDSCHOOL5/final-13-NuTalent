import { useQuery } from '@tanstack/react-query';

import { instance } from '../../util/api/axiosInstance';

const getProfile = async (accName) => {
  const { data } = await instance.get(`/profile/${accName}`);
  return data.profile;
};

export const useGetProfile = (accountname) => {
  const { data: profile } = useQuery({
    queryKey: ['profile', accountname],
    queryFn: () => getProfile(accountname),
    placeholderData: {},
  });

  return { profile };
};
