import { useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

import { instance } from '../../util/api/axiosInstance';
import imageValidation from '../../util/validation/imageValidation';

import { handleImageUpload } from '../../util/imageCompression';

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const res = await instance.post('/image/uploadfile', formData);
  const uploadedImage = `${res.config.baseURL}/${res.data.filename}`;

  return uploadedImage;
};

export const useUploadImage = () => {
  const [uploadedImage, setImage] = useState(null);

  const mutation = useMutation({
    mutationFn: (file) => uploadImage(file),
    onSuccess: (uploadedImage) => setImage(uploadedImage),
  });

  const handleImageChange = useCallback(async (e) => {
    const file = await handleImageUpload(e);
    // const file = e.target.files[0];
 
    if (!file) return;
    if (!imageValidation(file)) return;

    mutation.mutate(file);
  });

  return { uploadedImage, handleImageChange };
};
