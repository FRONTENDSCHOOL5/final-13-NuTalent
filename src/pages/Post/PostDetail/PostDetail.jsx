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

export default function PostDetail() {
  const token = localStorage.getItem('token');
  const [isDisabled, isSetDisabled] = useState(true);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState(undefined);
  const [content, setContent] = useState('');
  const { id } = useParams();

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
      const res = await instance.get(`/post/${id}/comments/?limit=5&skip=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      console.log(res);
      return res.data.comments;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function setComment() {
      const comment = await getComment();
      await getPost();
      setComments(comment);
    }
    setComment();
  }, []);

  // useEffect(() => {}, [comments]);

  const handleClick = async () => {
    try {
      const comment = JSON.stringify({
        comment: {
          content: content,
        },
      });
      console.log(token);
      const res = await instance.post(`/post/${id}/comments`, comment, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      console.log(res);
      getComment();
    } catch (error) {
      console.error(error);
      alert('댓글 등록 실패');
    }
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
            {comments.map((comment, index) => {
              return (
                <CommentLi key={index}>
                  {/* <img src={comment.author.image} alt="유저 프로필 이미지" /> */}
                  <div>
                    <h2>
                      {comment.author.username}
                      <span>{comment.createdAt}</span>
                    </h2>
                    <p>{comment.content}</p>
                  </div>
                  <button />
                </CommentLi>
              );
            })}
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
              onClick={() => {
                handleClick();
                setComments([...comments, content]);
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
