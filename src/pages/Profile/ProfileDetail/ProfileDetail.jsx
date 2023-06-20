/* eslint-disable */
import React, { useState } from 'react';
import TopBasicNav from '../../../components/common/Top/TopBasicNav';
import ProductItem from '../../../components/common/ProductItem/ProductItem';
import PostItem from '../../../components/common/PostItem/PostItem';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import StyledBtn from '../../../components/common/Button/Button';

import * as S from './ProfileDetail.styled';

export default function Profile() {
  const [view, setView] = useState('list');
  const viewHandler = () => {
    view === 'list' ? setView('album') : setView('list');
  };

  const Dummy = {
    followers: '100',
    followings: '100',
    userName: '사용자 이름',
    userId: 'user-id',
    userIntro: 'XXXXXXXX',
    userImg: 'https://picsum.photos/200',
  };

  const postDummy = {
    postDate: '2022-01-01',
    postImg: 'https://picsum.photos/200',
    postLike: '100',
    postMessage: '30',
    postText: 'XXXXXXXX',
  };

  const productDummy = {
    itemName: 'XXXXXXXX',
    price: '100',
    itemImg: 'https://picsum.photos/200',
  };

  return (
    <>
      <TopBasicNav />
      <S.Container>
        <S.ProfileSection>
          <S.ProfileWrap>
            <S.followWrap>
              <p>{Dummy.followers}</p>
              <p>followers</p>
            </S.followWrap>
            <S.ProfileImg src={Dummy.userImg} alt="프로필 사진" />
            <S.followWrap>
              <p>{Dummy.followings}</p>
              <p>followings</p>
            </S.followWrap>
          </S.ProfileWrap>
          <S.UserName>{Dummy.userName}</S.UserName>
          <S.UserId>@ {Dummy.userId}</S.UserId>
          <S.UserIntro>{Dummy.userIntro}</S.UserIntro>
          <S.UserBtnWrap>
            <S.messageButton></S.messageButton>
            <StyledBtn size="m">팔로우</StyledBtn>
            <S.shareButton></S.shareButton>
          </S.UserBtnWrap>
          {/* 언팔로우일 때, 내 페이지 일 때
          <S.UserBtnWrap>
            <S.messageButton></S.messageButton>
            <StyledBtn size="m" color='outlineGrey'>언팔로우</StyledBtn>
            <S.shareButton></S.shareButton>
          </S.UserBtnWrap>
          <S.UserBtnWrap>
            <StyledBtn size="m" color='outline'>프로필 수정</StyledBtn>
            <StyledBtn size="m" color='outline'>상품 등록</StyledBtn>
          </S.UserBtnWrap> 
          */}
        </S.ProfileSection>
        <S.ProductSection>
          <S.StyledH2>판매 중인 상품</S.StyledH2>
          <S.ProductList>
            <li>
              <ProductItem
                itemName={productDummy.itemName}
                price={productDummy.price}
                itemImg={productDummy.itemImg}
              />
            </li>
          </S.ProductList>
        </S.ProductSection>
        <S.PostSection>
          <S.PostTop>
            <S.viewButton view={view} type="button"></S.viewButton>
            <S.viewButton view={view} type="button"></S.viewButton>
          </S.PostTop>
          <S.PostList view={view}>
            <li>
              <PostItem
                postDate={postDummy.postDate}
                postImg={postDummy.postImg}
                postLike={postDummy.postLike}
                postMessage={postDummy.postMessage}
                postText={postDummy.postText}
                userId={Dummy.userId}
                userImg={Dummy.userImg}
                userName={Dummy.userName}
              />
            </li>
            {/* album view일 때
             <li>
              <img src={postDummy.postImg} alt="" />
            </li> 
            */}
          </S.PostList>
        </S.PostSection>
      </S.Container>
      <TabMenu />
    </>
  );
}
