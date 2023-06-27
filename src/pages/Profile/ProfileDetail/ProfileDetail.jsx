import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import ProductItem from '../../../components/common/ProductItem/ProductItem';
import PostItem from '../../../components/common/PostItem/PostItem';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import StyledBtn from '../../../components/common/Button/Button';

import { instance } from '../../../util/api/axiosInstance';
import useScrollBottom from '../../../hooks/useScrollBottom';
import BottomSheetModal from '../../../components/common/BottomSheetModal/BottomSheetModal';

import * as S from './ProfileDetail.styled';

import { useRecoilValue } from 'recoil';
import { recoilData } from '../../../recoil/atoms/dataState';
import { loginState } from '../../../recoil/atoms/loginState';

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState('list');
  const [skip, setSkip] = useState(0);
  const { accountname } = useParams();

  const currentUserData = useRecoilValue(recoilData);
  const token = useRecoilValue(loginState);

  const location = useLocation();
  console.log(currentUserData);

  const accountName =
    location.state !== null
      ? location.state.userId
      : currentUserData.accountname;

  console.log(accountName);
  const myAccountName = currentUserData.accountname;

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
      console.error(error);
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
      console.error(error);
    }
  };

  const loadPost = async (accName) => {
    try {
      const res = await instance.get(
        `/post/${accName}/userpost/?limit=5&skip=${skip}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      setPosts([...posts, ...res.data.post]);
    } catch (error) {
      console.error(error);
    }
  };

  const followHandler = async () => {
    try {
      if (profile.isfollow) {
        const res = await instance.delete(`/profile/${accountName}/unfollow`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        });
        setProfile(res.data.profile);
      } else {
        const res = await instance.post(
          `/profile/${accountName}/follow`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          },
        );
        setProfile(res.data.profile);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProfile(accountName);
    loadProduct(accountName);
    setPosts([]);
    loadPost(accountName);
  }, [accountName]);

  // 무한 스크롤
  const isBottom = useScrollBottom();
  useEffect(() => {
    setSkip((prevSkip) => prevSkip + 5);
    loadPost(accountName);
  }, [isBottom]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modal = useRef(null);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
    //누를때마다 setModalOpen의 상태가 true,false로 변하면서 모달창이 생겼다 없어졌다
  };

  const ModalArr = [
    { name: '삭제' },
    { name: '수정' },
    { name: '한수정' },
    { name: '숮엉' },
  ];

  return (
    <>
      <TopBasicNav openModal={openModal} />
      <S.Container>
        <S.ProfileSection>
          <BottomSheetModal
            ref={modal}
            isOpen={isModalOpen}
            title="로그아웃 하시겠어요?"
            cancel={() => setIsModalOpen(false)}
            actionText="로그아웃"
            action={() => console.log('로그아웃')}
          >
            {ModalArr}
          </BottomSheetModal>
          <S.ProfileWrap>
            <S.followLink to="/follower" state={profile.accountname}>
              <p>{profile.followerCount}</p>
              <p>followers</p>
            </S.followLink>
            <S.ProfileImg src={profile.image} alt="프로필 사진" />
            <S.followLink to="/following" state={profile.accountname}>
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
              <S.messageButton to={`/chatlist/${accountname}`} />
              <StyledBtn
                size="m"
                color={profile.isfollow ? 'outlineGrey' : 'fill'}
                onClick={followHandler}
              >
                {profile.isfollow ? '언팔로우' : '팔로우'}
              </StyledBtn>
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
              {posts.map((post) => {
                return view === 'list' ? (
                  <li key={post.accountname}>
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
                  </li>
                ) : (
                  post.image && (
                    <li key={post.accountname}>
                      <S.AlbumImg src={post.image} alt="" />
                    </li>
                  )
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
