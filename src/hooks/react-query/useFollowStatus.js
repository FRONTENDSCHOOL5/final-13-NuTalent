import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { instance } from '../../util/api/axiosInstance';

const onUnFollow = async (userInfo) => {
  const { data } = await instance.delete(
    `/profile/${userInfo.accountname}/unfollow?limit=infinite&skip=0`,
  );

  return data;
};

const onFollow = async (userInfo) => {
  const { data } = await instance.post(
    `/profile/${userInfo.accountname}/follow`,
  );

  return data;
};

const getFollowers = async (accountName) => {
  const res = await instance.get(
    `/profile/${accountName}/follower?limit=infinite&skip=0`,
  );

  return res.data;
};

const getFollowings = async (accountName) => {
  const res = await instance.get(
    `/profile/${accountName}/following?limit=infinite&skip=0`,
  );

  return res.data;
};

export const useFollowStatus = (accountName) => {
  const queryClient = useQueryClient();

  // Followers
  const { data: followersData, isLoading: isFollowersLoading } = useQuery({
    queryKey: ['followers', accountName],
    queryFn: () => getFollowers(accountName),
  });

  // Followings
  const { data: followingsData, isLoading: isFollowingsLoading } = useQuery({
    queryKey: ['followings', accountName],
    queryFn: () => getFollowings(accountName),
  });

  const { mutate: unfollowMutation } = useMutation({
    mutationFn: (userInfo) => onUnFollow(userInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(['followers', accountName]);
      queryClient.invalidateQueries(['followings', accountName]);
    },
  });

  const { mutate: followMutation } = useMutation({
    mutationFn: (userInfo) => onFollow(userInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(['followers', accountName]);
      queryClient.invalidateQueries(['followings', accountName]);
    },
  });

  return {
    followers: followersData || [],
    followings: followingsData || [],
    isLoading: isFollowersLoading || isFollowingsLoading,
    unfollowMutation,
    followMutation,
  };
};
