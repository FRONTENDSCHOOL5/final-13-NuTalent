import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import TopNav from '../../components/common/Top/TopNav';
import PostItem from '../../components/common/PostItem/PostItem';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import StyledBtn from '../../components/common/Button/Button';
import TagBar from '../../components/common/TagBar/TagBar';
import { instance } from '../../util/api/axiosInstance';
import NoFollowerImg from '../../assets/img/smile.svg';
import useScrollBottom from '../../hooks/useScrollBottom';
import useTag from '../../hooks/useTag';
import { recoilData } from '../../recoil/atoms/dataState';

import {
  Container,
  ContainerUl,
  ContainerLi,
  NoFollowerWrap,
} from './Home.styled';

export default function Home() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const token = useRecoilValue(recoilData).token;
  const { tagList, selectedTag, selectTag, checkTagInContent } = useTag();

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

  return (
    <>
      <TopNav>
        <TopNav.Title>HOME</TopNav.Title>
        <TopNav.SearchButton />
      </TopNav>
      <Container>
        <TagBar
          tagList={tagList}
          selectedTag={selectedTag}
          selectTag={selectTag}
        />
        {isLoading ? (
          <div></div>
        ) : (
          <>
            {data.length > 0 ? (
              <ContainerUl>
                {data
                  .filter((post) => {
                    if (selectedTag === null) {
                      return true;
                    }
                    return checkTagInContent(post.content, selectedTag);
                  })
                  .map((post) => {
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
