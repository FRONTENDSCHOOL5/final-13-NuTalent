import React from 'react';
import TopMainNav from '../../components/common/Top/TopMainNav';
import PostItem from '../../components/common/PostItem/PostItem';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import { instance } from '../../util/api/axiosInstance';
import { useEffect, useState } from 'react';
import {
  Container,
  ContainerUl,
  ContainerLi,
  NoFollowerWrap,
} from './Home.styled';
import StyledBtn from '../../components/common/Button/Button';
import NoFollowerImg from '../../assets/img/smile.svg';
import useScrollBottom from '../../hooks/useScrollBottom';

export default function Home() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const isBottom = useScrollBottom();

  const token = localStorage.getItem('token');

  useEffect(() => {
    try {
      instance
        .get(`/post/feed/?limit=5&skip=${skip}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        })
        .then((response) => {
          setData((prevData) => [...prevData, ...response.data.posts]);
          setIsLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
    setSkip((prevSkip) => prevSkip + 5);
  }, [isBottom]);
  console.log('렌더링');

  return (
    <>
      <TopMainNav />
      <Container>
        {isLoading ? (
          <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>로딩중</h1>
        ) : (
          <>
            {data.length > 0 ? (
              <ContainerUl>
                {data.map((post, index) => {
                  return (
                    <ContainerLi key={index}>
                      {
                        <PostItem
                          postDate={post.createdAt}
                          postImg={post.image}
                          postLike={post.heartCount}
                          postMessage={post.commentCount}
                          postText={post.content}
                          userId={post.author.accountname}
                          userImg={post.author.image}
                          userName={post.author.username}
                        />
                      }
                    </ContainerLi>
                  );
                })}
              </ContainerUl>
            ) : (
              <NoFollowerWrap>
                <img src={NoFollowerImg} alt="팔로워가 없습니다 이미지" />
                <p>유저를 검색해 팔로우 해보세요! </p>
                <StyledBtn width="10rem">검색하기</StyledBtn>
              </NoFollowerWrap>
            )}
          </>
        )}
      </Container>
      <TabMenu />
    </>
  );
}
