import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import StyledBtn from '../../../components/common/Button/Button';
import TopNav from '../../../components/common/Top/TopNav';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useUpdatePost, useGetPost } from '../../../hooks/react-query/usePost';
import { useUploadImage } from '../../../hooks/react-query/useImage';
import TagBar from '../../../components/common/TagBar/TagBar';
import useTag from '../../../hooks/useTag';

import * as S from './PostEdit.styled';
import defaultProfileImg from '../../../assets/img/basic-profile-img-.svg';

export default function PostEdit() {
  const { id } = useParams();
  const textareaRef = useRef(null);
  const currentUserData = useRecoilValue(recoilData);

  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const { post } = useGetPost(id);
  const { updatePostMutate } = useUpdatePost(id);
  const { uploadedImage, handleImageChange } = useUploadImage();
  const {
    tagList,
    selectedTag,
    selectTag,
    addTagToContent,
    contentWithoutTag,
    getTagInContent,
  } = useTag();

  useEffect(() => {
    if (post?.content) {
      setContent(contentWithoutTag(post.content));
      selectTag(getTagInContent(post.content));
    }
    if (post?.image) {
      setImages(post.image.split(','));
    }
  }, [post]);

  useEffect(() => {
    if (uploadedImage) {
      setImages((prev) => [...prev, uploadedImage]);
    }
  }, [uploadedImage]);

  useEffect(() => {
    textareaHeightControl();
  }, [content]);

  // 텍스트에 따라 textarea의 높이 동적으로 조절
  const textareaHeightControl = () => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${
      textareaRef.current.scrollHeight / 10
    }rem`;
  };

  const deleteHandler = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
    textareaHeightControl();
  };

  const onImageUpload = (e) => {
    if (images.length >= 3) return;
    return handleImageChange(e);
  };

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <StyledBtn
          size="ms"
          disabled={!(content || images.length)}
          onClick={() => {
            updatePostMutate({
              content: addTagToContent(content),
              image: images.join(','),
            });
          }}
        >
          업로드
        </StyledBtn>
      </TopNav>
      <S.TagBarContainer>
        <TagBar
          tagList={tagList}
          selectedTag={selectedTag}
          selectTag={selectTag}
        />
      </S.TagBarContainer>
      <S.Section>
        <S.ProfileImg
          src={currentUserData.image || defaultProfileImg}
          alt="프로필 이미지"
        />
        <S.Textarea
          ref={textareaRef}
          placeholder="게시글 입력하기..."
          onChange={contentHandler}
          value={content}
        ></S.Textarea>
        {images?.length > 0 &&
          images.map((image, index) => (
            <S.imgLayout key={`imgLayout-${index}`}>
              <S.PostImage key={index} src={image} alt={`게시글 이미지 `} />
              <S.Deletebtn
                type="button"
                key={`Deletebtn-${index}`}
                onClick={() => deleteHandler(index)}
              ></S.Deletebtn>
            </S.imgLayout>
          ))}
        <div>
          <S.FileLabel htmlFor="uploadImg"></S.FileLabel>
          <S.FileInput
            type="file"
            id="uploadImg"
            onChange={onImageUpload}
            multiple
          />
        </div>
      </S.Section>
    </>
  );
}
