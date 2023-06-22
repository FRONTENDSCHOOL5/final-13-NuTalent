import React from 'react';
import { SearchWrap, UserListLi } from './Search.styled';
import TopSearchNav from '../../components/common/Top/TopSearchNav';
import TabMenu from '../../components/common/Tabmenu/TabMenu';
import User from '../../components/common/User/User';

export default function Search() {
  const data = [
    {
      _id: '01',
      username: 'user1',
      accountname: '내가 사용자1',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '02',
      username: 'user2',
      accountname: '내가 사용자2',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '03',
      username: 'user3',
      accountname: '내가 사용자3',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '04',
      username: 'user4',
      accountname: '내가 사용자4',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '05',
      username: 'user5',
      accountname: '내가 사용자5',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '06',
      username: 'user6',
      accountname: '내가 사용자6',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '07',
      username: 'user7',
      accountname: '내가 사용자7',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '08',
      username: 'user8',
      accountname: '내가 사용자8',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '09',
      username: 'user9',
      accountname: '내가 사용자9',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '10',
      username: 'user10',
      accountname: '내가 사용자10',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
    {
      _id: '11',
      username: 'user11',
      accountname: '내가 사용자11',
      following: [],
      follower: [],
      followerCount: Number,
      followingCount: Number,
      image: 'https://picsum.photos/200/300',
    },
  ];
  return (
    <>
      <TopSearchNav />
      <SearchWrap>
        <ul>
          {data.map((data, index) => {
            return (
              <UserListLi key={index}>
                <User
                  userName={data.username}
                  userImg={data.image}
                  userId={data.accountname}
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
