/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import ProductItem from '../../../components/common/ProductItem/ProductItem';
import PostItem from '../../../components/common/PostItem/PostItem';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import StyledBtn from '../../../components/common/Button/Button';

import { instance } from '../../../util/api/axiosInstance';

import * as S from './ProfileDetail.styled';

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState('list');
  // * follow 상태 - 버튼 분기처리에 사용
  // TODO: 초기값 받는 로직 추가하기
  const [follow, setFollow] = useState(false);
  const { id } = useParams();

  const accountName = process.env.REACT_APP_ACCOUNT_NAME;
  const myId = process.env.REACT_APP_USER_ID;
  const token = process.env.REACT_APP_USER_TOKEN;

  const loadProfile = async (accName) => {
    try {
      const res = await instance.get(`/profile/${accName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setProfile(res.data.profile);
    } catch (error) {
      console.log(error);
    }
  };

  const loadProduct = async (accName) => {
    try {
      const res = await instance.get(`/product/${accName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setProducts(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPost = async (accName) => {
    try {
      const res = await instance.get(`/post/${accName}/userpost`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setPosts(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    loadProfile(accountName);
    loadProduct(accountName);
    loadPost(accountName);
  }, []);

  return (
    <>
      <TopBasicNav />
      <S.Container>
        <S.ProfileSection>
          <S.ProfileWrap>
            <S.followWrap>
              <p>{profile.followerCount}</p>
              <p>followers</p>
            </S.followWrap>
            <S.ProfileImg src={profile.image} alt="프로필 사진" />
            <S.followWrap>
              <p>{profile.followingCount}</p>
              <p>followings</p>
            </S.followWrap>
          </S.ProfileWrap>
          <S.UserName>{profile.username}</S.UserName>
          <S.UserId>@ {profile.accountname}</S.UserId>
          <S.UserIntro>{profile.intro}</S.UserIntro>
          {myId === id ? (
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
              <S.messageButton to={`/chatlist/${id}`} />
              {follow ? (
                <StyledBtn size="m">팔로우</StyledBtn>
              ) : (
                <StyledBtn size="m" color="outlineGrey">
                  언팔로우
                </StyledBtn>
              )}
              <S.shareButton />
            </S.UserBtnWrap>
          )}
        </S.ProfileSection>
        {products.length > 0 && (
          <S.ProductSection>
            <S.StyledH2>판매 중인 상품</S.StyledH2>
            <S.ProductList>
              {products.map((product, index) => {
                return (
                  <li key={index}>
                    <ProductItem
                      itemName={product.itemName}
                      price={product.price}
                      itemImg={product.itemImage}
                    />
                  </li>
                );
              })}
            </S.ProductList>
          </S.ProductSection>
        )}
        {posts.length > 0 && (
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
              {posts.map((post, index) => {
                return (
                  <li key={index}>
                    <Link to={`/post/${post.id}`}>
                      {view === 'list' ? (
                        <PostItem
                          postDate={post.createdAt}
                          postImg={post.image}
                          postLike={post.heartCount}
                          postMessage={post.commentCount}
                          postText={post.content}
                          userId={post.author.accountname}
                          userImg={profile.image}
                          userName={post.author.username}
                        />
                      ) : (
                        <S.AlbumImg src={post.image} alt="" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </S.PostList>
          </S.PostSection>
        )}
      </S.Container>
      <TabMenu />
    </>
  );
}
