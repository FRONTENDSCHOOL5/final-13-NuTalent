import React, { useState } from 'react';

import { SearchWrap, UserListLi } from './Search.styled';

import TopSearchNav from '../../components/common/Top/TopSearchNav';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import User from '../../components/common/User/User';

import { useGetResult } from '../../hooks/react-query/useSearch';

export default function Search() {
  const [keywordToSearchUser, setKeywordToSearchUser] = useState('');
  const { searchedResult } = useGetResult(keywordToSearchUser);

  return (
    <>
      <TopSearchNav
        type="text"
        value={keywordToSearchUser}
        onChange={(e) => setKeywordToSearchUser(e.target.value)}
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
