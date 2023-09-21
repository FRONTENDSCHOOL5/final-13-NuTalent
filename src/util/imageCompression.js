import imageCompression from 'browser-image-compression';

export const handleImageUpload = async (e) => {
  const imageFile = e.target.files[0];
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`); // 원본 파일크기

  const options = {
    maxSizeMB: 0.9,
    maxWidthOrHeight: 490,
    useWebWorker: true,
  }

  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // 압축 후 파일크기
    const fileName = compressedFile.name;
    const image = new File([compressedFile], fileName, { type: "image/jpeg" });

    return image;
    
  } catch (error) {
    console.log(error);
  }
}