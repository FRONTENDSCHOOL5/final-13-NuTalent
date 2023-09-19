import imageCompression from 'browser-image-compression';

export const handleImageUpload = async (e) => {
  const imageFile = e.target.files[0];

  const options = {
    maxSizeMB: 0.9,
    maxWidthOrHeight: 490,
    useWebWorker: true,
  }

  try {
    const compressedFile = await imageCompression(imageFile, options);
    const fileName = compressedFile.name;
    const image = new File([compressedFile], fileName, { type: "image/jpeg" });

    return image;
    
  } catch (error) {
    console.log(error);
  }
}