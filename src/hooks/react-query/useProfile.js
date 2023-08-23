import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { recoilData } from '../../recoil/atoms/dataState';

import { instance } from '../../util/api/axiosInstance';

// const setCurrentUserData = useSetRecoilState(recoilData);
// const myInfo = useRecoilValue(recoilData);

const getProfile = async (accName) => {
  const { data } = await instance.get(`/profile/${accName}`);
  return data.profile;
};

const updateProfile = async (user) => {
  const { data } = await instance.put('/user', user);
  return data;
}

const uploadProfileImage = async (formData) => {
  const { data } = await instance.post('/image/uploadfile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data;
}

export const useGetProfile = (accountname) => {
  const { data: profile } = useQuery({
    queryKey: ['profile', accountname],
    queryFn: () => getProfile(accountname),
    placeholderData: {},
  });

  return { profile };
};

export const useUpdateProfile = () => {
  const navigate = useNavigate();

  const setCurrentUserData = useSetRecoilState(recoilData);
  const myInfo = useRecoilValue(recoilData);

  const { mutate: updateProfileMutate } = useMutation({
    mutationFn: (user) => updateProfile(user),
    onSuccess: (res) => {
      console.log('res', res);
      setCurrentUserData({
        ...myInfo,
        accountname: res.user.accountname,
        image: res.user.image,
        intro: res.user.intro,
        username: res.user.username,
      });

      navigate(`/profile/${res.user.accountname}`);
    }
  })
  return { updateProfileMutate };
}

export const useUploadProfileImage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const { mutate: uploadProfileImageMutate } = useMutation({
    mutationFn: (formData) => uploadProfileImage(formData),
    onSuccess: (res) => {
      console.log('res', res);

      const imageUrl = `https://api.mandarin.weniv.co.kr/${res.filename}`;
      console.log('imageUrl', imageUrl);

      setUploadedImage(imageUrl);
    }
  })
  return { uploadProfileImageMutate, uploadedImage };
}