import React, { useState } from 'react';

import { useGetResult } from '../../hooks/react-query/useSearch';

import { SearchWrap, UserListLi } from './Search.styled';

import TopNav from '../../components/common/Top/TopNav';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import User from '../../components/common/User/User';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const { searchedResult } = useGetResult(keyword);

  return (
    <>
      <TopNav>
        <TopNav.BackButton />
        <TopNav.SearchInput
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </TopNav>
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
