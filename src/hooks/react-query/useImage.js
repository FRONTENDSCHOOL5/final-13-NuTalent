import { useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

import { instance } from '../../util/api/axiosInstance';
import imageValidation from '../../util/validation/imageValidation';

const uploadedImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const res = await instance.post('/image/uploadfile', formData);
  const uploadedImage = `${res.config.baseURL}/${res.data.filename}`;

  return uploadedImage;
};

export const useUploadImage = () => {
  const [image, setImage] = useState(null);

  const mutation = useMutation({
    mutationFn: (file) => uploadedImage(file),
    onSuccess: (uploadedImage) => setImage(uploadedImage),
  });

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (!imageValidation(file)) return;

    mutation.mutate(file);
  });

  return { image, handleImageChange };
};
