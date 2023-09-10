import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import moment from 'moment'; // moment import 추가
import 'moment/locale/ko';
import TopNav from '../../../components/common/Top/TopNav';
import PostItem from '../../../components/common/PostItem/PostItem';
import {
  PostItemWrapper,
  CommentUl,
  CommentLi,
  CommentBox,
  PostDetailLink,
} from './PostDetail.styled';
import { useGetPost, useDeletePost } from '../../../hooks/react-query/usePost';
import {
  useGetInfiniteComments,
  useCreateComment,
  useDeleteComment,
  useReportComment,
} from '../../../hooks/react-query/useComment';
import useScrollBottom from '../../../hooks/useScrollBottom';
import handleImageError from '../../../util/handleImageError';
import { recoilData } from '../../../recoil/atoms/dataState';
import { useAlert, useBottomSheet } from '../../../hooks/useModal';

export default function PostDetail() {
  moment.locale('ko');
  const { id } = useParams();
  const { accountname, image } = useRecoilValue(recoilData);
  const navigate = useNavigate();
  const { post } = useGetPost(id);
  const { deletePostMutate } = useDeletePost(accountname);
  const { comments, fetchNextComments, hasNextComments } =
    useGetInfiniteComments(id);
  const { createReportCommentMutate } = useReportComment(id);
  const { createCommentMutate } = useCreateComment(id);
  const { deleteCommentMutate } = useDeleteComment(id);
  const [isDisabled, setIsDisabled] = useState(true);
  const [content, setContent] = useState('');
  const { openAlert } = useAlert();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
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
      {post && comments.pages?.length && (
        <>
          <PostItemWrapper>
            <PostItem
              postDate={post.createdAt}
              postImg={post.image}
              postLike={post.heartCount}
              postMessage={post.commentCount}
              postText={post.content}
              postId={post.id}
              userId={post.author.accountname}
              user_id={post.author.id}
              userImg={post.author.image}
              userName={post.author.username}
              isLink={false}
              onDeletePost={() => {
                deletePostMutate(post.id);
                navigate(-1);
              }}
            />
          </PostItemWrapper>
          <CommentUl>
            {comments?.pages?.map((commentsData) => {
              return commentsData.map((comment) => {
                return (
                  <CommentLi key={comment.id}>
                    <PostDetailLink
                      to={`/profile/${comment.author.accountname}`}
                      state={{
                        userId: comment.author.accountname,
                        user_id: comment.author.id,
                      }}
                    >
                      <img
                        src={comment.author.image}
                        onError={handleImageError}
                        alt="유저 프로필 이미지"
                      />
                    </PostDetailLink>
                    <div>
                      <PostDetailLink
                        to={`/profile/${comment.author.accountname}`}
                        state={{
                          userId: comment.author.accountname,
                          user_id: comment.author.id,
                        }}
                        style={{ gap: '1.6rem' }}
                      >
                        <h2>
                          {comment.author.username}
                          <span>{moment(comment.createdAt).fromNow()}</span>
                        </h2>
                      </PostDetailLink>
                      <p>{comment.content}</p>
                    </div>
                    <button
                      onClick={() => {
                        openBottomSheet(
                          comment.author.accountname === accountname ? (
                            <>
                              <button
                                onClick={() => {
                                  openAlert({
                                    title: '댓글을 삭제할까요?',
                                    actionText: '삭제',
                                    actionFunction: () => {
                                      console.log(comment.id);
                                      deleteCommentMutate(comment.id);
                                    },
                                  });
                                  closeBottomSheet();
                                }}
                              >
                                삭제
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => {
                                openAlert({
                                  title: '게시글을 신고할까요?',
                                  actionText: '신고',
                                  actionFunction: () => {
                                    createReportCommentMutate(comment.id);
                                  },
                                });
                                closeBottomSheet();
                              }}
                            >
                              신고하기
                            </button>
                          ),
                        );
                      }}
                    />
                  </CommentLi>
                );
              });
            })}
          </CommentUl>
          <CommentBox>
            <img src={image} alt="프로필 이미지" />
            <input
              type="text"
              placeholder="댓글 입력하기"
              onChange={(e) => {
                setIsDisabled(false);
                setContent(e.target.value);
              }}
              value={content}
            />
            <button
              onClick={() => {
                createCommentMutate({ content: content });
                setContent('');
                setIsDisabled(true);
              }}
              disabled={isDisabled}
            >
              게시
            </button>
          </CommentBox>
        </>
      )}
    </>
  );
}
