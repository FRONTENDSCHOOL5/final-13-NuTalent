import React from 'react';
import { useParams } from 'react-router-dom';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import PostItem from '../../../components/common/PostItem/PostItem';

import {
  PostItemWrapper,
  CommentUl,
  CommentLi,
  CommentBox,
} from './PostDetail.styled';
import basicProfile from '../../../assets/img/basic-profile-img-.svg';

export default function PostDetail() {
  const { id } = useParams();
  console.log(id);
  const postitemdummy = {
    postDate: '2022-01-01',
    postTitle: '손수민',
    postText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sapiente officiis aliquid expedita corrupti? Similique at dolor reprehenderit quia deserunt atque natus eius animi aspernatur incidunt. Mollitia aut perspiciatis tenetur.',
    postImg: 'https://picsum.photos/200/300',
    postLike: '좋아요',
    userImg: 'https://picsum.photos/200/300',
    userName: '손수민',
    userId: 'suminson',
  };
  return (
    <>
      <TopBasicNav />
      <PostItemWrapper>
        <PostItem
          postDate={postitemdummy.postDate}
          postTitle={postitemdummy.postTitle}
          postText={postitemdummy.postText}
          postImg={postitemdummy.postImg}
          postLike={postitemdummy.postLike}
          userImg={postitemdummy.userImg}
          userName={postitemdummy.userName}
          userId={postitemdummy.userId}
        />
      </PostItemWrapper>
      <CommentUl>
        <CommentLi>
          <img src={basicProfile} alt="유저 프로필 이미지" />
          <div>
            <h2>
              손수민<span>22분전</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sapiente officiis aliquid expedita corrupti? Similique
              at dolor reprehenderit quia deserunt atque natus eius animi
              aspernatur incidunt. Mollitia aut perspiciatis tenetur.
            </p>
          </div>
        </CommentLi>
        <CommentLi>
          <img src={basicProfile} alt="유저 프로필 이미지" />
          <div>
            <h2>
              손수민<span>22분전</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sapiente officiis aliquid expedita corrupti? Similique
              at dolor reprehenderit quia deserunt atque natus eius animi
              aspernatur incidunt. Mollitia aut perspiciatis tenetur.
            </p>
          </div>
        </CommentLi>
        <CommentLi>
          <img src={basicProfile} alt="유저 프로필 이미지" />
          <div>
            <h2>
              손수민<span>22분전</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sapiente officiis aliquid expedita corrupti? Similique
              at dolor reprehenderit quia deserunt atque natus eius animi
              aspernatur incidunt. Mollitia aut perspiciatis tenetur.
            </p>
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
