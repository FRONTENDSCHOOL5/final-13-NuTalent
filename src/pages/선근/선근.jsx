import React, { useEffect, useState, useRef } from 'react';
import TopUploadNav from '../../components/common/Top/TopUploadNav';
import * as S from './Upload.styled';
import defaultProfileImg from '../../assets/img/basic-profile.svg';
import { instance } from '../../util/api/axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function Upload({ userImg }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const textareaRef = useRef(null);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzZkNzZhYjJjYjIwNTY2MzJjZmZkOCIsImV4cCI6MTY5MjAzNjcwMCwiaWF0IjoxNjg2ODUyNzAwfQ.UVaGzelSUsPykhwO4dw9fSE5A9Hdcy0tueRsAGdv-O0';

  // 텍스트에 따라 동적으로 높이 조절
  const textareaHeightControl = () => {
    textareaRef.current.style.height = `${
      textareaRef.current.scrollHeight / 10
    }rem`;
  };

  const contentHanlder = (e) => {
    setContent(e.target.value);
    textareaHeightControl();
  };

  const uploadHanlder = (e) => {
    const selectedImage = e.target.files[0];
    if (!selectedImage) return;

    if (selectedImage.size > 10 * 1024 * 1024) {
      alert('10MB를 초과하는 이미지는 업로드 할 수 없습니다.');
    } else if (
      !selectedImage.name.match(/(.*)\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i)
    ) {
      alert(
        '이미지 파일(*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)만 업로드 할 수 있습니다.',
      );
    } else {
      setImage(URL.createObjectURL(selectedImage));
    }
  };

  // 언마운트 되면 연결 해제해서 메모리 누수 방지
  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  useEffect(() => {
    console.log('렌더링');
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(content, image);
    try {
      const data = JSON.stringify({
        post: {
          content: content,
          image: image,
        },
      });

      const res = await instance.post('/post', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      console.log(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  // const uploadHandler = () => {
  //   console.log('asdf');
  // };

  useEffect(() => {
    console.log(content, image);
  }, [content, image]);

  // TODO: Form 제거하고 new FormData 만들어서 처리하기
  // 버튼이 고정된 위치라서

  const navigate = useNavigate();

  return (
    <>
      <TopUploadNav
        size="ms"
        disabled={!(content || image)}
        type="submit"
        onClick={() => {
          navigate(-1);
        }}
      >
        업로드
      </TopUploadNav>
      <S.Form onSubmit={submitHandler} userImg={userImg || defaultProfileImg}>
        <S.Textarea
          ref={textareaRef}
          placeholder="게시글 입력하기..."
          onChange={contentHanlder}
        ></S.Textarea>
        {image && <S.Image src={image} alt="게시글 이미지" />}
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput type="file" id="uploadImg" onChange={uploadHanlder} />
        </div>
      </S.Form>
    </>
  );
}
