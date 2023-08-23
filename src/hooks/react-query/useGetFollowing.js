import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../util/api/axiosInstance';

const getFollowings = async (accountName) => {
  // console.log(accountName);
  const res = await instance.get(
    `/profile/${accountName}/following?limit=infinite&skip=0`,
  );

  // console.log(res);
  return res;
};

export const useGetFollowings = (accountName) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['followings', accountName],
    queryFn: () => getFollowings(accountName),
    placeholderData: [],
  });

  return { followings: data?.data || [], queryClient };
};
