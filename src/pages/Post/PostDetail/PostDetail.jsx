import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import moment from 'moment'; // moment import 추가
import 'moment/locale/ko';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import PostItem from '../../../components/common/PostItem/PostItem';
import {
  PostItemWrapper,
  CommentUl,
  CommentLi,
  CommentBox,
  PostDetailLink,
} from './PostDetail.styled';
import basicProfile from '../../../assets/img/basic-profile-img-.svg';
import { instance } from '../../../util/api/axiosInstance';
import useScrollBottom from '../../../hooks/useScrollBottom';

import BottomSheetModal from '../../../components/common/BottomSheetModal/BottomSheetModal';
import Alert from '../../../components/common/Alert/Alert';
import { recoilData } from '../../../recoil/atoms/dataState';

export default function PostDetail() {
  moment.locale('ko');
  const token = useRecoilValue(recoilData).token;
  const [isDisabled, setIsDisabled] = useState(true);
  const [comments, setComments] = useState([]);
  const [isLastComment, setIsLastComment] = useState(false);
  const [data, setData] = useState(undefined);
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isAlertReportOpen, setIsAlertReportOpen] = useState(false);
  const { accountname } = useRecoilValue(recoilData);

  const [selectedComment, setSelectedComment] = useState(null);
  const [isMyComment, setIsMyComment] = useState(false);

  const bottomSheetHandler = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    if (isBottomSheetOpen && bottomSheetRef.current) {
      bottomSheetRef.current.focus();
    }
  }, [isBottomSheetOpen, isAlertOpen]);
  const [skip, setSkip] = useState(0);
  const isBottom = useScrollBottom();

  const getPost = async () => {
    try {
      const res = await instance.get(`/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res.data);
      setData(res.data.post);
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  const getComment = async () => {
    try {
      const res = await instance.get(
        `/post/${id}/comments/?limit=10&skip=${skip}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );

      console.log(res.data.comments);
      return res.data.comments.reverse();
    } catch (error) {
      console.log(error);
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getPost(); // 초기 렌더링 시에만 getPost 함수 실행
  }, []);
  useEffect(() => {
    if (isLastComment) {
      return;
    }
    async function setComment() {
      const data = await getComment();
      // await getPost();
      console.log(data);
      setComments((prevComments) => [...prevComments, ...data]);
      if (data.length < 10) {
        setIsLastComment(true);
      }
    }

    setComment();
    setSkip((prevSkip) => prevSkip + 10);
  }, [isBottom]);

  const handleClick = async () => {
    try {
      const comment = JSON.stringify({
        comment: {
          content: content,
        },
      });

      const res = await instance.post(`/post/${id}/comments`, comment, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      console.log(res);
      getPost();

      return res.data.comment;
    } catch (error) {
      console.error(error);
      alert('댓글 등록 실패');
    }
  };

  const handleDeleteClick = async (commentId) => {
    try {
      const res = await instance.delete(`/post/${id}/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res);
      getPost();
    } catch (error) {
      console.log(error);
      alert(`${error.response.data.message}`);
    }
  };

  const deleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  const onSubmitReportClick = async (comment) => {
    try {
      // comment 신고하기
      const res = await instance.post(
        `/post/${id}/comments/${comment.id}/report`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );

      console.log(res);

      console.log(comment.author);
      alert(
        `
        사용자 이름: ${comment.author.username}
        계정 내용: ${comment.content}
  
        신고가 완료되었습니다.`,
      );
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  const deletePost = async (postId) => {
    try {
      await instance.delete(`/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert(`${error.response.data.message}`);
    }
  };

  return (
    <>
      <TopBasicNav />
      {data && comments && (
        <>
          <PostItemWrapper>
            <PostItem
              postDate={data.createdAt}
              postImg={data.image}
              postLike={data.heartCount}
              postMessage={data.commentCount}
              postText={data.content}
              postId={data.id}
              userId={data.author.accountname}
              user_id={data.author.id}
              userImg={data.author.image}
              userName={data.author.username}
              isLink={false}
              onDeletePost={() => deletePost(data.id)}
            />
          </PostItemWrapper>
          <CommentUl>
            {comments.map((comment) => {
              return (
                <CommentLi key={comment.id}>
                  <PostDetailLink
                    to={`/profile/${comment.author.accountname}`}
                    state={{
                      userId: comment.author.accountname,
                      user_id: comment.author.id,
                    }}
                  >
                    <img src={comment.author.image} alt="유저 프로필 이미지" />
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
                      setIsBottomSheetOpen(true);
                      setIsMyComment(
                        comment.author.accountname === accountname,
                      );
                      setSelectedComment(comment);
                    }}
                  />
                </CommentLi>
              );
            })}
          </CommentUl>
          <CommentBox>
            <img src={basicProfile} alt="프로필 이미지" />
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
              onClick={async () => {
                const newComment = await handleClick();
                console.log(newComment);

                setComments([...comments, newComment]);
                setContent('');
                setIsDisabled(true);
              }}
              disabled={isDisabled}
            >
              게시
            </button>
          </CommentBox>
          <BottomSheetModal
            isOpen={isBottomSheetOpen}
            bottomSheetHandler={bottomSheetHandler}
          >
            {isMyComment ? (
              <>
                <button
                  className="modalBtn"
                  ref={bottomSheetRef}
                  onClick={() => {
                    setIsBottomSheetOpen(false);
                    setIsAlertOpen(true);
                  }}
                >
                  삭제
                </button>
              </>
            ) : (
              <button
                className="modalBtn"
                ref={bottomSheetRef}
                onClick={() => {
                  setIsBottomSheetOpen(false);
                  setIsAlertReportOpen(true);
                }}
              >
                신고하기
              </button>
            )}
          </BottomSheetModal>
          <Alert
            isOpen={isAlertOpen}
            title="댓글을 삭제할까요?"
            cancel={() => setIsAlertOpen(false)}
            actionText="삭제"
            action={() => {
              handleDeleteClick(selectedComment.id);
              deleteComment(selectedComment.id, selectedComment);
              setIsAlertOpen(false);
            }}
          />
          <Alert
            isOpen={isAlertReportOpen}
            title="게시글을 신고할까요?"
            cancel={() => setIsAlertReportOpen(false)}
            actionText="신고"
            action={() => {
              onSubmitReportClick(selectedComment);
              setIsAlertReportOpen(false);
            }}
          />
        </>
      )}
    </>
  );
}
