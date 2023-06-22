import React, { useState } from 'react';

import { SearchWrap, UserListLi } from './Search.styled';

import TopSearchNav from '../../components/common/Top/TopSearchNav';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import User from '../../components/common/User/User';

import { instance } from '../../util/api/axiosInstance';

import defaultProfileImage from '../../assets/img/basic-profile-img-.svg';

export default function Search() {
  const [keywordForSearchUser, setKeywordForSearchUser] = useState('');
  const [data, setData] = useState([]);

  const token = process.env.REACT_APP_USER_TOKEN;

  const handleSearchUser = async (e) => {
    setKeywordForSearchUser(e.target.value.toLowerCase());

    const response = await instance.get(
      `/user/searchuser/?keyword=${keywordForSearchUser}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );

    // console.log(response);
    setData(response.data);
    console.log(data);
  };

  const filteredUser = data.filter((item) => {
    return item.username.replace(' ', '').includes(keywordForSearchUser);
  });

  const handleImageError = (e) => {
    e.target.src = defaultProfileImage;
  };

  // console.log(filteredUser);
  return (
    <>
      <TopSearchNav
        type="text"
        value={keywordForSearchUser}
        onChange={handleSearchUser}
      />
      <SearchWrap>
        <ul>
          {filteredUser.map((data, index) => {
            return (
              <UserListLi key={index}>
                <User
                  userName={data.username}
                  userImg={data.image}
                  userId={data.accountname}
                  onError={handleImageError}
                />
              </UserListLi>
            );
          })}
        </ul>
      </SearchWrap>

      <TabMenu />
    </>
  );
}
