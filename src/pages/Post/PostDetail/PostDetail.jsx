import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
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
import useScrollBottom from '../../../hooks/useScrollBottom';

export default function PostDetail() {
  const token = localStorage.getItem('token');
  const [isDisabled, isSetDisabled] = useState(true);
  const [comments, setComments] = useState([]);
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
    }
  };

  useEffect(() => {
    //useEffect에 async를 바로 사용할수 없기 때문에 함수를 만들어서 사용해준다.
    async function setComment() {
      const data = await getComment();
      console.log(data);

      await getPost();
      setComments(data);
    }
    setComment();
  }, []);

  useEffect(() => {
    getComment();
    setSkip(skip + 5);
  }, [isBottom]);

  // useEffect(() => {}, [comments]);

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
    console.log(token);
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
    }
  };
  const deleteComment = (commentId) => {
    setComments(
      comments.filter((comment) => {
        if (comment.id === commentId) {
          return null;
        }
        return comment;
      }),
    );
  };

  return (
    <>
      <TopBasicNav />
      {data && comments && (
        <>
          <PostItemWrapper>
            <PostItem post={data} isLink={false} />
          </PostItemWrapper>
          <CommentUl>
            {comments.map((comment, index) => (
              <CommentLi key={index}>
                <img src={comment.author.image} alt="유저 프로필 이미지" />
                <div>
                  <h2>
                    {comment.author.username}
                    <span>{comment.createdAt}</span>
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
            ))}
          </CommentUl>
          <CommentBox>
            <img src={basicProfile} />
            <input
              type="text"
              placeholder="댓글 입력하기"
              onChange={(e) => {
                isSetDisabled(false);
                setContent(e.target.value);
                // setComments(e.target.value);
              }}
            />
            <button
              onClick={async () => {
                const newComment = await handleClick();
                console.log(newComment);

                setComments([...comments, newComment]);
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
