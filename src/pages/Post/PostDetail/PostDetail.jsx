import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import moment from 'moment'; // moment import 추가
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import PostItem from '../../../components/common/PostItem/PostItem';
import {
  PostItemWrapper,
  CommentUl,
  CommentLi,
  CommentBox,
} from './PostDetail.styled';
import basicProfile from '../../../assets/img/basic-profile-img-.svg';
import { instance } from '../../../util/api/axiosInstance';
import { loginState } from '../../../recoil/atoms/loginState';
import useScrollBottom from '../../../hooks/useScrollBottom';

export default function PostDetail() {
  const token = useRecoilValue(loginState);
  const [isDisabled, setIsDisabled] = useState(true);
  const [comments, setComments] = useState([]);
  const [isLastComment, setIsLastComment] = useState(false);
  const [data, setData] = useState(undefined);
  const [content, setContent] = useState('');
  const { id } = useParams();

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

      console.log(res);
      return res.data.comments;
    } catch (error) {
      console.log(error);
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    if (isLastComment) {
      return;
    }
    async function setComment() {
      const data = await getComment();
      await getPost();
      console.log(data);
      setComments([...comments, ...data]);
      if (data.length < 10) {
        setIsLastComment(true);
      }
    }

    setComment();
    setSkip(skip + 10);
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
    } catch (error) {
      console.log(error);
      alert(`${error.response.data.message}`);
    }
  };

  const deleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
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
            />
          </PostItemWrapper>
          <CommentUl>
            {comments
              .slice()
              .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
              .map((comment) => {
                return (
                  <CommentLi key={comment.id}>
                    <img src={comment.author.image} alt="유저 프로필 이미지" />
                    <div>
                      <h2>
                        {comment.author.username}
                        <span>{moment(comment.createdAt).fromNow()}</span>
                      </h2>
                      <p>{comment.content}</p>
                    </div>
                    <button
                      onClick={() => {
                        handleDeleteClick(comment.id);
                        deleteComment(comment.id);
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
        </>
      )}
    </>
  );
}
