import React, { useCallback, useState } from 'react';

import { SearchWrap, UserListLi } from './Search.styled';

import TopSearchNav from '../../components/common/Top/TopSearchNav';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import User from '../../components/common/User/User';

import { instance } from '../../util/api/axiosInstance';

import defaultProfileImage from '../../assets/img/basic-profile-img-.svg';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../recoil/atoms/loginState';
import { debounce } from 'lodash';

export default function Search() {
  const [keywordForSearchUser, setKeywordToSearchUser] = useState('');
  const [data, setData] = useState([]);

  const token = useRecoilValue(loginState);

  const sendQuery = async (keyword) => {
    const res = await instance.get(`/user/searchuser/?keyword=${keyword}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setData(res.data);
  };

  const delayedSearch = useCallback(
    debounce((q) => sendQuery(q), 500),
    [],
  );

  const handleSearchUserChange = (e) => {
    setKeywordToSearchUser(e.target.value.toLowerCase());
    delayedSearch(e.target.value.toLowerCase());
  };

  const handleImageError = (e) => {
    e.target.src = defaultProfileImage;
  };

  return (
    <>
      <TopSearchNav
        type="text"
        value={keywordForSearchUser}
        onChange={handleSearchUserChange}
      />
      <SearchWrap>
        <ul>
          {data.map((data) => {
            return (
              <UserListLi key={data._id}>
                <User
                  userName={data.username}
                  userImg={data.image}
                  userId={data.accountname}
                  onError={handleImageError}
                  to={`/profile/${data.accountname}`}
                  state={{ userId: data.accountname }}
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
