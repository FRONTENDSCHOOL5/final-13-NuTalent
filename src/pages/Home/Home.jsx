import React from 'react';
import TopMainNav from '../../components/common/Top/TopMainNav';
import PostItem from '../../components/common/PostItem/PostItem';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import {
  Container,
  ContainerUl,
  ContainerLi,
  // NoFollowerWrap,
} from './Home.styled';
// import StyledBtn from '../../components/common/Button/Button';
// import NoFollowerImg from '../../assets/img/smile.svg';
export default function Home() {
  const postitemdummy = {
    postDate: '2022-01-01',
    postTitle: '손수민',
    postContent: '콘텐츠',
    postImg: 'https://picsum.photos/200/300',
    postLike: '좋아요',
    userImg: 'https://picsum.photos/200/300',
    userName: '손수민',
    userId: 'sumin5570',
  };

  return (
    <>
      {/* 팔로워나 게시글이 없을때 */}
      {/* <NoFollowerWrap>
        <img src={NoFollowerImg} alt="팔로워가 없습니다 이미지" />
        <p>유저를 검색해 팔로우 해보세요! </p>
        <StyledBtn width="10rem">검색하기</StyledBtn>
      </NoFollowerWrap> */}

      {/* 팔로워,게시글 보유중 일때 */}

      <TopMainNav />
      <Container>
        <ContainerUl>
          <ContainerLi>
            <PostItem
              postDate={postitemdummy.postDate}
              postTitle={postitemdummy.postTitle}
              postContent={postitemdummy.postContent}
              postImg={postitemdummy.postImg}
              postLike={postitemdummy.postLike}
              userImg={postitemdummy.userImg}
              userName={postitemdummy.userName}
              userId={postitemdummy.userId}
            ></PostItem>
          </ContainerLi>
          <ContainerLi>
            <PostItem
              postDate={postitemdummy.postDate}
              postTitle={postitemdummy.postTitle}
              postContent={postitemdummy.postContent}
              postImg={postitemdummy.postImg}
              postLike={postitemdummy.postLike}
              userImg={postitemdummy.userImg}
              userName={postitemdummy.userName}
              userId={postitemdummy.userId}
            ></PostItem>
          </ContainerLi>
        </ContainerUl>
      </Container>
      <TabMenu />
    </>
  );
}
