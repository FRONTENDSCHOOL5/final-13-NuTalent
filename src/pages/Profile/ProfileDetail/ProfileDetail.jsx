import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import ProductItem from '../../../components/common/ProductItem/ProductItem';
import PostItem from '../../../components/common/PostItem/PostItem';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import StyledBtn from '../../../components/common/Button/Button';
import { recoilData } from '../../../recoil/atoms/dataState';
import useScrollBottom from '../../../hooks/useScrollBottom';
import handleImageError from '../../../util/handleImageError';
import {
  useDeletePost,
  useGetInfinitePosts,
} from '../../../hooks/react-query/usePost';
import { useGetProfile } from '../../../hooks/react-query/useProfile';
import {
  useDeleteProduct,
  useGetProducts,
} from '../../../hooks/react-query/useProduct';
import { useToggleFollow } from '../../../hooks/react-query/useFollow';

import * as S from './ProfileDetail.styled';

export default function Profile() {
  const [view, setView] = useState('list');
  const { accountname } = useParams();

  const currentUserData = useRecoilValue(recoilData);
  const myAccountName = currentUserData.accountname;

  const { products } = useGetProducts(accountname);
  const { profile } = useGetProfile(accountname);
  const { posts, fetchNextPosts, hasNextPosts } =
    useGetInfinitePosts(accountname);
  const { toggleFollowMutate } = useToggleFollow();
  const { deletePostMutate } = useDeletePost(accountname);
  const { deleteProductMutate } = useDeleteProduct(accountname);

  // 무한 스크롤
  const isBottom = useScrollBottom();
  useEffect(() => {
    if (isBottom && hasNextPosts) {
      console.log(hasNextPosts);
      fetchNextPosts();
    }
  }, [isBottom]);

  ///공유 버튼 클릭시 링크 클립보드에 복사
  const handleCopyClipBoard = async (text) => {
    if (navigator.canShare) {
      try {
        await navigator.share({
          title: 'nutalent',
          text: 'welcome to nutalent!!',
          url: text,
        });
      } catch (err) {
        console.log(err);
      }
      return;
    } else {
      try {
        await navigator.clipboard.writeText(text);
        alert('클립보드에 링크가 복사되었어요.');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <TopBasicNav />
      <S.Container>
        <S.ProfileSection>
          <S.ProfileWrap>
            <S.followLink
              to="/follower"
              state={{
                accountName: profile.accountname,
                myAccountName: myAccountName,
              }}
            >
              <p>{profile.followerCount}</p>
              <p>followers</p>
            </S.followLink>
            <S.ProfileImg
              src={profile.image}
              onError={handleImageError}
              alt="프로필 사진"
            />
            <S.followLink
              to="/following"
              state={{
                accountName: profile.accountname,
                myAccountName: myAccountName,
              }}
            >
              <p>{profile.followingCount}</p>
              <p>followings</p>
            </S.followLink>
          </S.ProfileWrap>
          <S.UserName>{profile.username}</S.UserName>
          <S.UserId>@ {profile.accountname}</S.UserId>
          <S.UserIntro>{profile.intro}</S.UserIntro>
          {myAccountName === accountname ? (
            <S.UserBtnWrap>
              <StyledBtn to="/profile/edit" size="m" color="outline">
                프로필 수정
              </StyledBtn>
              <StyledBtn to="/productupload" size="m" color="outline">
                상품 등록
              </StyledBtn>
            </S.UserBtnWrap>
          ) : (
            <S.UserBtnWrap>
              <S.messageButton
                to={`/chatlist/${accountname}`}
                state={{
                  userName: profile.username,
                  userImg: profile.image,
                }}
              />
              <StyledBtn
                size="m"
                color={profile.isfollow ? 'outlineGrey' : 'fill'}
                onClick={() => toggleFollowMutate(profile)}
              >
                {profile.isfollow ? '언팔로우' : '팔로우'}
              </StyledBtn>
              <S.shareButton
                onClick={() => handleCopyClipBoard(window.location.href)}
              />
            </S.UserBtnWrap>
          )}
        </S.ProfileSection>
        {products.length > 0 && (
          <S.ProductSection>
            <S.StyledH2>판매 중인 상품</S.StyledH2>
            <S.ProductList>
              {products.map((product) => {
                return (
                  <li key={product.id + 'asdas'}>
                    <ProductItem
                      productId={product.id}
                      accountname={product.author.accountname}
                      itemName={product.itemName}
                      price={product.price}
                      itemImg={product.itemImage}
                      onDelete={() => deleteProductMutate(product.id)}
                      link={product.link}
                    />
                  </li>
                );
              })}
            </S.ProductList>
          </S.ProductSection>
        )}
        {posts?.pages?.length > 0 && (
          <S.PostSection>
            <S.PostTop>
              <S.viewButton
                view={view}
                type="button"
                onClick={() => setView('list')}
              ></S.viewButton>
              <S.viewButton
                view={view}
                type="button"
                onClick={() => setView('album')}
              ></S.viewButton>
            </S.PostTop>
            <S.PostList view={view}>
              {posts.pages.map((postData) => {
                return postData.map((post) => {
                  return view === 'list' ? (
                    <li key={post.accountname}>
                      <PostItem
                        postId={post.id}
                        postDate={post.createdAt}
                        postImg={post.image}
                        postLike={post.heartCount}
                        postMessage={post.commentCount}
                        postText={post.content}
                        userId={post.author.accountname}
                        userImg={profile.image}
                        userName={post.author.username}
                        onDeletePost={() => deletePostMutate(post.id)}
                      />
                    </li>
                  ) : (
                    post.image && (
                      <li key={post.accountname}>
                        <S.AlbumImg src={post.image} alt="" />
                      </li>
                    )
                  );
                });
              })}
            </S.PostList>
          </S.PostSection>
        )}
      </S.Container>
      <TabMenu />
    </>
  );
}
