import React from 'react';
import { useParams } from 'react-router-dom';

import TopNav from '../../../components/common/Top/TopNav';
import TabMenu from '../../../components/common/Tabmenu/TabMenu';
import ProfileInfo from '../../../components/Profile/ProfileInfo';
import ProductList from '../../../components/ProductList/ProductList';
import PostList from '../../../components/PostList/PostList';
import { useGetProfile } from '../../../hooks/react-query/useProfile';
import { useToggleFollow } from '../../../hooks/react-query/useFollow';
import {
  useDeleteProduct,
  useGetProducts,
} from '../../../hooks/react-query/useProduct';
import {
  useDeletePost,
  useGetInfinitePosts,
} from '../../../hooks/react-query/usePost';

import * as S from './ProfileDetail.styled';

export default function Profile() {
  const { accountname } = useParams();

  const { profile } = useGetProfile(accountname);
  const { toggleFollowMutate } = useToggleFollow();

  const { products } = useGetProducts(accountname);
  const { deleteProductMutate } = useDeleteProduct(accountname);

  const { posts, fetchNextPosts } = useGetInfinitePosts(
    accountname,
    'userpost',
  );
  const { deletePostMutate } = useDeletePost(accountname);
  console.log(posts);

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <TopNav.OptionButton />
      </TopNav>
      <S.Container>
        <ProfileInfo
          profile={profile}
          followToggle={() => toggleFollowMutate(profile)}
        />
        <ProductList
          products={products}
          deleteProduct={() => deleteProductMutate(products.id)}
        />
        <PostList
          posts={posts?.pages}
          fetchNextPosts={fetchNextPosts}
          deletePost={() => deletePostMutate(posts.id)}
          hasViewController={true}
        />
      </S.Container>
      <TabMenu />
    </>
  );
}
