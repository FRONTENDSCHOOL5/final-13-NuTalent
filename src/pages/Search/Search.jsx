import React, { useState } from 'react';

import { useGetResult } from '../../hooks/react-query/useSearch';

import { SearchWrap, UserListLi } from './Search.styled';

import TopSearchNav from '../../components/common/Top/TopSearchNav';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import User from '../../components/common/User/User';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const { searchedResult } = useGetResult(keyword);

  return (
    <>
      <TopSearchNav
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SearchWrap>
        <ul>
          {searchedResult
            ? searchedResult.map((data) => {
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
              })
            : null}
        </ul>
      </SearchWrap>
      <TabMenu />
    </>
  );
}
