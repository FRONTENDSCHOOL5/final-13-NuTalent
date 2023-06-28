import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import TopMainNav from '../../components/common/Top/TopMainNav';
import PostItem from '../../components/common/PostItem/PostItem';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import { instance } from '../../util/api/axiosInstance';
import {
  Container,
  ContainerUl,
  ContainerLi,
  NoFollowerWrap,
} from './Home.styled';
import StyledBtn from '../../components/common/Button/Button';
import NoFollowerImg from '../../assets/img/smile.svg';
import useScrollBottom from '../../hooks/useScrollBottom';
import { loginState } from '../../recoil/atoms/loginState';

export default function Home() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const token = useRecoilValue(loginState);

  const isBottom = useScrollBottom();

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
          <div></div>
        ) : (
          <>
            {data.length > 0 ? (
              <ContainerUl>
                {data.map((post) => {
                  console.log(post);
                  return (
                    <ContainerLi key={post.id}>
                      {
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
                          isLink={true}
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
                <StyledBtn width="10rem" to="/search">
                  검색하기
                </StyledBtn>
              </NoFollowerWrap>
            )}
          </>
        )}
      </Container>
      <TabMenu />
    </>
  );
}
