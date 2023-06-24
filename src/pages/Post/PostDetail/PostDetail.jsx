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
  // const [post, setPost] = useState([]);
  const [data, setData] = useState(undefined);
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

  useEffect(() => {
    getPost();
  }, []);
  console.log(data);
  if (!data) return;

  return (
    <>
      <TopBasicNav />
      <PostItemWrapper>
        <PostItem post={data} isLink={false} />
      </PostItemWrapper>
      <CommentUl>
        <CommentLi>
          <img src={data.author.image} alt="유저 프로필 이미지" />
          <div>
            <h2>
              {data.author.username}
              <span>{data.createdAt}</span>
            </h2>
            <p>{data.content}</p>
          </div>
        </CommentLi>
      </CommentUl>
      <CommentBox>
        <img src={basicProfile} />
        <input type="text" placeholder="댓글 입력하기" />
        <button disabled={false}>게시</button>
      </CommentBox>
    </>
  );
}
