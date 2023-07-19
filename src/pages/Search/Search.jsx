import React, { useCallback, useState, useEffect } from 'react';

import { SearchWrap, UserListLi } from './Search.styled';

import TopSearchNav from '../../components/common/Top/TopSearchNav';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import User from '../../components/common/User/User';

import { instance } from '../../util/api/axiosInstance';

import { useRecoilValue } from 'recoil';
import { loginState } from '../../recoil/atoms/loginState';
import { debounce } from 'lodash';

export default function Search() {
  const [keywordToSearchUser, setKeywordToSearchUser] = useState('');
  const [data, setData] = useState([]);

  const token = useRecoilValue(loginState);

  const sendQuery = async () => {
    if (!keywordToSearchUser) return;
    const res = await instance.get(
      `/user/searchuser/?keyword=${keywordToSearchUser}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    setData(res.data);
  };

  const delayedSearch = useCallback(debounce(() => sendQuery(), 500));

  const handleSearchUserChange = (e) => {
    setKeywordToSearchUser(e.target.value);
    delayedSearch();
  };

  useEffect(() => {
    sendQuery();
  }, [keywordToSearchUser]);

  return (
    <>
      <TopSearchNav
        type="text"
        value={keywordToSearchUser}
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
