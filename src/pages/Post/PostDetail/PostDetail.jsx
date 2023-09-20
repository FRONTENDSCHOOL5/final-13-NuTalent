import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TopNav from '../../../components/common/Top/TopNav';
import PostItem from '../../../components/common/PostItem/PostItem';
import { PostItemWrapper } from './PostDetail.styled';
import { useGetPost, useDeletePost } from '../../../hooks/react-query/usePost';
import {
  useGetInfiniteComments,
  useDeleteComment,
  useReportComment,
  useCreateComment,
} from '../../../hooks/react-query/useComment';
import { recoilData } from '../../../recoil/atoms/dataState';
import CommentList from '../../../components/Comment/CommentList';
import CommentUpload from '../../../components/Comment/CommentUpload';
import useScrollBottom from '../../../hooks/useScrollBottom';

export default function PostDetail() {
  const { id } = useParams();
  const { accountname, image } = useRecoilValue(recoilData);
  const navigate = useNavigate();
  const { post } = useGetPost(id);
  const { deletePostMutate } = useDeletePost(accountname);
  const { comments, fetchNextComments, hasNextComments } =
    useGetInfiniteComments(id);
  const { createReportCommentMutate } = useReportComment(id);
  const { deleteCommentMutate } = useDeleteComment(id);
  const { createCommentMutate } = useCreateComment(id);
  const isBottom = useScrollBottom();

  useEffect(() => {
    if (isBottom && hasNextComments) {
      fetchNextComments();
    }
  }, [isBottom]);
  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <TopNav.OptionButton />
      </TopNav>
      {post && (
        <>
          <PostItemWrapper>
            <PostItem
              postData={post}
              isLink={false}
              onDeletePost={() => {
                deletePostMutate(post.id);
                navigate(-1);
              }}
            />
          </PostItemWrapper>
          <CommentList
            comments={comments}
            accountname={accountname}
            onDeleteComment={deleteCommentMutate}
            onReportComment={createReportCommentMutate}
          />
          <CommentUpload
            image={image}
            createCommentMutate={createCommentMutate}
          />
        </>
      )}
    </>
  );
}
