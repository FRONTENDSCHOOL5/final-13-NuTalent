import { useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../util/api/axiosInstance';

const getFollowers = async (accountName) => {
  // console.log(accountName);
  const res = await instance.get(
    `/profile/${accountName}/follower?limit=infinite&skip=0`,
  );

  // console.log(res, 777);
  return res;
};

export const useGetFollowers = (accountName) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['followers', accountName],
    queryFn: () => getFollowers(accountName),
    placeholderData: [],
  });

  return { followers: data?.data || [], queryClient };
};
