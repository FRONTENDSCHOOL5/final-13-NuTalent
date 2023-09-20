import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { CommentUl, CommentLi, PostDetailLink } from './CommentList.styled';
import { useAlert, useBottomSheet } from '../../hooks/useModal';
import handleImageError from '../../util/handleImageError';
export default function CommentList({
  comments,
  accountname,
  onDeleteComment,
  onReportComment,
}) {
  moment.locale('ko');
  const { openAlert } = useAlert();
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  return (
    <>
      {comments.pages?.length && (
        <CommentUl>
          {comments?.pages?.map((commentsData) => {
            return commentsData.map((comment) => {
              return (
                <CommentLi key={comment.id}>
                  <PostDetailLink to={`/profile/${comment.author.accountname}`}>
                    <img
                      src={comment.author.image}
                      onError={handleImageError}
                      alt="유저 프로필 이미지"
                    />
                  </PostDetailLink>
                  <div>
                    <PostDetailLink
                      to={`/profile/${comment.author.accountname}`}
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
                                    onDeleteComment(comment.id);
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
                                  onReportComment(comment.id);
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
      )}
    </>
  );
}
