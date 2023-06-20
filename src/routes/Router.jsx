import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login/Login';
import SignUp from '../pages/Auth/SignUp/SignUp';
import ProfileSetting from '../pages/Auth/ProfileSetting/ProfileSetting';
import ChatList from '../pages/Chat/ChatList/ChatList';
import ChatRoom from '../pages/Chat/ChatRoom/ChatRoom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import PostDetail from '../pages/Post/PostDetail/PostDetail';
import PostEdit from '../pages/Post/PostEdit/PostEdit';
import PostUpload from '../pages/Post/PostUpload/PostUpload';
import ProductEdit from '../pages/Product/ProductEdit/ProductEdit';
import ProductUpload from '../pages/Product/ProductUpload/ProductUpload';
import Follower from '../pages/Profile/Follower/Follower';
import Profile from '../pages/Profile/ProfileDetail/ProfileDetail';
import ProfileEdit from '../pages/Profile/ProfileEdit/ProfileEdit';
import Search from '../pages/Search/Search';
import Splash from '../pages/Splash/Splash';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp">
          <Route index element={<SignUp />} />
          <Route path="profile" element={<ProfileSetting />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatlist/:id" element={<ChatRoom />} />
        <Route path="/post">
          <Route path=":id" element={<PostDetail />} />
          <Route path="upload" element={<PostUpload />} />
          <Route path="edit/:id" element={<PostEdit />} />
        </Route>
        <Route path="productupload" element={<ProductUpload />} />
        <Route path="productedit" element={<ProductEdit />} />
        <Route path="follower" element={<Follower />} />
        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
