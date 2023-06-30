<!-- <h1 align="center">🌈 NU-TALENT </h1> -->

<img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/d6058d52-09ec-4b56-8968-03731d099fa2">

> 📎 배포 URL : https://nutalent.netlify.app/ <br/>
> 🔓 계정 : `ip@time.com` | `test123` <br/>

**"꺼내봐 너의 부캐"**

- 본인의 재능을 자유롭게 공유하고, 비슷한 관심사를 가진 사람들과 소통할 수 있어요.
- 누구나 관심 있는 재능을 배우거나 창작물을 구매 및 판매할 수 있어요. <br/><br/>

## ✨ 팀 소개

안녕하세요! 저희는 4명의 Front-end 개발자로 구성된 '**IP-TIME**' 입니다. <br/> 팀원들의 공통된 MBTI인 I,P에서 착안하게 되었어요. <br/>주변에서 쉽게 연결할 수 있는 iptime 와이파이처럼 누구나 접근 가능하며 친숙한 서비스를 지향한다는 의미를 가지고 있습니다.<br/>
_(🦁멋쟁이사자처럼 프론트엔드스쿨 5기 프로젝트 13팀)_

|                                                   **강은초**                                                    |                                             **손수민**                                             |                                            **이선근**                                             |                                             **한수정**                                             |
| :-------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| <img width="180" height="180" alt="ec_profile_img" src="https://avatars.githubusercontent.com/u/107094445?v=4"> | <img width="180" alt="sm_profile_img" src="https://avatars.githubusercontent.com/u/126536402?v=4"> | <img width="180" alt="sg_profile_img" src="https://avatars.githubusercontent.com/u/97281800?v=4"> | <img width="180" alt="sj_profile_img" src="https://avatars.githubusercontent.com/u/126536384?v=4"> |
|                                      [cho7778](https://github.com/cho7778)                                      |                            [suminson97](https://github.com/suminson97)                             |                                [5unk3n](https://github.com/5unk3n)                                |                                [soooee](https://github.com/soooee4)                                |
|                                               문서화 & 소통 리더                                                |                                         디자인 & 기획 리더                                         |                                             개발 리더                                             |                                              팀 리더                                               |

</br>

## ✨ 역할 분담

#### 👩🏻‍💻 강은초

- 초기 폴더구조 세팅 및 환경설정
- 로그인, 프로필 설정, 검색, 프로필 수정 페이지
- 이메일, 회원가입 유효성 검사
- Recoil로 전역 데이터 관리
- 각 페이지 라우터 연결, 본인/타인 프로필 페이지 전환, splash 페이지 연결

#### 🧑🏻‍💻 손수민

- 상품 등록, 홈피드, 게시글 상세, 404 페이지
- 이미지 유효성 검사, 무한 스크롤 구현, 리액트 포탈로 모달 구현
- 피그마 디자인
- 라우터 연결 및 폴더구조 수정

#### 🧑🏻‍💻 이선근

- 초기 개발환경 세팅 (PR, Issue 템플릿 생성)
- 게시글 작성 및 수정, 프로필 페이지
- 채팅 페이지 마크업 및 스타일링
- PrivateRoute, 이미지 유효성 검사, 게시글 보기 방식 변경, 무한 스크롤 구현, 리액트 포탈로 모달 구현

#### 👩🏻‍💻 한수정

- 팔로우, 팔로잉, 회원가입, 인트로 페이지
- 이메일, 회원가입 유효성 검사
- 로그인 페이지 마크업 및 스타일링
- 탭 메뉴 및 좋아요 버튼 활성화, 리액트 포탈로 모달 구현

### 👥 공통

- 공통 컴포넌트
  - Alert
  - BottomSheetModal
  - Button
  - PostItem
  - ProductItem
  - TabMenu
  - TextActiveInput
  - Top

<p align="right"><a href="#top">(🔼 Top)</a></p>
<br>

## ✨ 개발 환경

### 🛠 기술 스택

|   구분   | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FrontEnd | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-E33332?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> |
| BackEnd  | 제공된 API 사용                                                                                                                                                                                                                                                                                                                                                                                                                                   |

<br>

### 🛠 Package Manager

| 패키지 매니저 | 용도                                    |
| ------------- | --------------------------------------- |
| yarn          | node.js환경에서 패키지 관리를 위해 사용 |

<br>

### 🛠 Node Modules

| 모듈명           | 도입계기                                                                  |
| ---------------- | ------------------------------------------------------------------------- |
| recoil           | 전역 상태 관리를 위해 사용                                                |
| axios            | 서버와 통신을 위해 사용                                                   |
| react-router-dom | 페이지 라우팅을 위해 사용                                                 |
| styled-reset     | 스타일 구현의 편의를 위해 사용                                            |
| lodash           | 검색 페이지에서 함수의 호출을 일정시간 지연하는 debounce 구현을 위해 사용 |
| moment           | Date 스타일을 변경하여 가독성을 높이기 위해 사용                          |

<br>

### ⚙️ 협업 툴

| 협업 툴명 | 용도                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| Git       | 프로젝트 파일 변경 사항을 추적하고 팀원들 간의 파일 작업 조율을 위해 분산 버전 관리 시스템 사용 |
| GitHub    | Git저장소 호스팅을 위해 사용                                                                    |
| GitKraken | Git 히스토리를 시각화하기 위해 사용                                                             |
| Notion    | 협업에 필요한 전반적인 문서 관리를 위해 사용                                                    |
| discord   | GitHub과 연동하여 변동사항 추적을 위해 사용                                                     |

<br>

### 🔧 협업 방식

- Git-Flow 사용 <br/>
  Git-Flow을 본 목적대로 사용하기 위해서는 main, hotfix, release, develop, feature 브랜치를 사용해야 하지만, <br>3주라는 **짧은 개발 일정**상 **feature, develop, main 브랜치만 우선적으로 사용**하였습니다.<br> 개발 기간 이후 hotfix, release 브랜치를 적극적으로 사용하여 시맨틱한 버전관리를 진행할 예정입니다.

- 컨벤션 소개 <br/>

  커밋 컨벤션
  | 커밋 유형 | 의미 |
  | ------------------ | --------------------------------------------------- |
  | Feat | 새로운 기능 추가 |
  | Fix | 버그 수정 |
  | Docs | 문서 수정 |
  | Style | css 수정 |
  | Refactor | 코드 리팩토링 |
  | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
  | Chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
  | Comment | 필요한 주석 추가 및 변경 |
  | Rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
  | Remove | 파일을 삭제하는 작업만 수행한 경우 |
  | !BREAKING CHANGE | 커다란 API 변경의 경우 |
  | !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |
  <br/>

  프리티어 설정

  ```
  {
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "printWidth": 80
  }
  ```

<br>

<p align="right"><a href="#top">(🔼 Top)</a></p>

## ✨ 프로젝트 소개

### 🗓 개발 기간

| 주차                      |                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| **1주차** : (6/1 ~ 6/3)   | - 서비스 기획 (컨셉 및 디자인) <br>- 사용할 기술 스택 정리 </br> - 마일스톤 도입            |
| **2주차** : (6/4 ~ 6/10)  | - 초기 개발환경 세팅 <br>- 기술 스택 세미나 <br>- 공통 컴포넌트 구현                        |
| **3주차** : (6/11 ~ 6/17) | - 페이지 단위로 업무 분담하여 작업 시작                                                     |
| **4주차** : (6/18 ~ 6/24) | - 기능 테스트 및 오류 해결 </br> - 주요 기능 구현 1차 완료 </br> - 기능 테스트 및 오류 해결 |
| **5주차** : (6/25~6/29)   | - 기능 테스트 및 오류 해결<br>- 리팩토링<br>- README 작성                                   |

</div markdown="1">

  <p align="right"><a href="#top">(🔼 Top)</a></p>

### 🎨 디자인

<img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/a72fe9ea-0364-46e5-8e83-7b49a393e5b0">

### 🖥 기능 UI

<div markdown="1">
</details>

- ### Splash, 로그인,회원가입,프로필 설정

  |                                                                   로그인                                                                    |                                                                  회원가입                                                                   |                                                                 프로필설정                                                                  |
  | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
  | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/bb44ae36-67e6-47e0-af4d-1727ae0a4d6a" width=220 height=462> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/06b5b5e0-cb82-44a4-a911-a3d942c63c9f" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/a89c0940-91a5-4b39-a86c-5fd14f6b5f62" height=462 width=220> |

- ### 게시글

  |                                                                 게시글 등록                                                                 |                                                                 게시글 수정                                                                 |                                                                 게시글 삭제                                                                 |
  | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
  | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/22b56bd5-4d1b-4825-a6e8-1d69b2065e6a" width=220 height=462> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/dcb39654-927e-410f-b186-cb14d52f4550" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/e1828d78-c357-4145-8027-f5708b5a60f7" height=462 width=220> |

- ### 상품

  |                                                                  상품 등록                                                                   |                                                                  상품 수정                                                                  |                                                                  상품 삭제                                                                  |
  | :------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
  | <img src= "https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/00cfb725-20bb-4004-9d60-9e195abaffc1" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/85bc056c-703c-4e95-ad9d-877955641141" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/61614b91-0635-4274-b384-99f941f23582" height=462 width=220> |

- ### 댓글

  |                                                                  댓글 등록                                                                   |                                                                  댓글 신고                                                                  |                                                                  댓글 삭제                                                                  |
  | :------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
  | <img src= "https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/6dfd4d38-fdda-430a-bcb5-3ed3562d3517" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/d016e30d-f3e7-4815-8046-ef99e50c86af" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/0d3ac828-f16a-41a4-9e54-85e177efe3d0" height=462 width=220> |

- ### 프로필 수정,나의 프로필,다른 유저 프로필

  |                                                                 프로필 수정                                                                  |                                                                 나의 프로필                                                                 |                                                             다른 유저의 프로필                                                              |
  | :------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
  | <img src= "https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/99c41a6d-7065-46ef-be18-b9ddabaec796" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/6147ed20-5ad2-4788-a098-65e6fa9f32c8" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/edac6e0f-f6cf-4451-8cd0-454b1ddd3a54" height=462 width=220> |

- ### 채팅, NotFound 페이지, 로그아웃

  |                                                                     채팅                                                                     |                                                               NotFound 페이지                                                               |                                                                  로그아웃                                                                   |
  | :------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
  | <img src= "https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/0aeced98-40f3-4ed8-8d9e-d5a2dfb9f49d" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/5df7f01b-41f2-49f9-9a53-109904e62d55" height=462 width=220> | <img src="https://github.com/FRONTENDSCHOOL5/final-13-NuTalent/assets/126536402/20912f57-70b7-47d3-b985-a2c8cb565cb0" height=462 width=220> |

<details>
<summary>React Portal</summary>

모달이 리액트 앱의 DOM 트리에서 렌더링이 되면 부모 요소의 css 상속을 받아 원하는 위치에 렌더링하기 힘들지만 포탈을 사용하면 DOM 트리에서 벗어나 스타일링이 더 쉬워지고 z-index 관련 문제를 쉽게 해결할 수 있습니다.

```js
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from './Alert.styled';

export default function Alert({ isOpen, title, cancel, action, actionText }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    isOpen &&
    createPortal(
      <S.Overlay>
        <S.Alert isOpen={isOpen}>
          <p>{title}</p>
          <div>
            <button type="button" onClick={cancel}>
              취소
            </button>
            <button type="button" onClick={action}>
              {actionText}
            </button>
          </div>
        </S.Alert>
      </S.Overlay>,
      document.body,
    )
  );
}
```

<div markdown="1">
</details>

<details>
<summary>Private Route</summary>

## PrivateRoute

PrivateRoutes 컴포넌트 내에서 Recoil로 사용자 정보를 받아와 로그인이 되어 있는지 확인합니다.

사용자의 정보가 없다면 로그인 페이지로 이동하게되고 사용자의 정보가 있다면 Outlet을 통해 PrivatesRoute 컴포넌트 안의 Route로 이동하게 됩니다.

```js

// PrivateRoute.jsx

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { recoilData } from '../recoil/atoms/dataState';

export default function PrivateRoutes() {
  const userData = useRecoilValue(recoilData);
  const isLoggedIn = userData.length !== 0;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

// Router.jsx

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp">
          <Route index element={<SignUp />} />
          <Route path="profile" element={<ProfileSetting />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatlist/:accountname" element={<ChatRoom />} />
          <Route path="/post">
            <Route path=":id" element={<PostDetail />} />
            <Route path="upload" element={<PostUpload />} />
            <Route path="edit/:id" element={<PostEdit />} />
          </Route>
          <Route path="productupload" element={<ProductUpload />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
          <Route path="/follower" element={<Follower />} />
          <Route path="/following" element={<Following />} />
          <Route path="/profile">
            <Route path=":accountname" element={<Profile />} />
            <Route path="edit" element={<ProfileEdit />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

```

<div markdown="1">
</details>

<details>
<summary>📂 폴더 구조</summary>

```

📁 NuTalent
├── 📁 .github
├── 📁 node_modules
├── 📁 public
├── 📁 src
│ ├── 📁 assets
│ │ └── 📁 image
│ ├── 📁 components
│ │ ├── 📁 common
│ │ │ ├── 📁 Alert
│ │ │ ├── 📁 BottomSheetModal
│ │ │ ├── 📁 Button
│ │ │ ├── 📁 PostItem
│ │ │ ├── 📁 ProductItem
│ │ │ ├── 📁 TabMenu
│ │ │ ├── 📁 TextActiveInput
│ │ │ ├── 📁 Top
│ │ │ └── 📁 User
│ ├── 📁 hooks
│ ├── 📁 pages
│ │ ├── 📁 Auth
│ │ │ ├── 📁 Intro
│ │ │ ├── 📁 Login
│ │ │ ├── 📁 ProfileSetting
│ │ │ └── 📁 SignUp
│ │ ├── 📁 Chat
│ │ │ ├── 📁 ChatList
│ │ │ └── 📁 ChatRoom
│ │ ├── 📁 Home
│ │ ├── 📁 NotFound
│ │ ├── 📁 Post
│ │ │ ├── 📁 PostDetail
│ │ │ ├── 📁 PostEdit
│ │ │ └── 📁 PostUpload
│ │ ├── 📁 Product
│ │ │ ├── 📁 ProductEdit
│ │ │ └── 📁 ProductUpload
│ │ ├── 📁 Profile
│ │ │ ├── 📁 Follwer
│ │ │ ├── 📁 Following
│ │ │ ├── 📁 ProfileDetail
│ │ │ └── 📁 ProfileEdit
│ │ ├── 📁 Search
│ │ └── 📁 Splash
│ ├── 📁 recoil
│ │ ├── 📁 atoms
│ │ ├── 📁 effects
│ │ └── 📁 selectors
│ ├── 📁 routes
│ ├── 📁 styles
│ ├── 📁 util
└── 📁 api
│ ├── App.js
│ └── index.js
├── .eslintignore
├── .eslintrc
├── .git
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package.json
├── README.md
├── README.md
└── yarn.lock

```

<div markdown="1">
</details>

<p align="right"><a href="#top">(🔼 Top)</a></p>

## ✨ 트러블 슈팅

<br>
<details>
<summary>💡 유저 검색 시 오류 발생</summary>

### - 유저 검색 시 오류발생

검색 api를 요청해서 검색 결과를 받아오는데 콘솔창에 계속 다음과 같은 에러가 찍혀나왔습니다.
<img src="https://raw.githubusercontent.com/cho7778/sample/main/%E1%84%90%E1%85%B3%E1%84%85%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%89%E1%85%B2%E1%84%90%E1%85%B5%E1%86%BC1.png"/>

net::ERR_CERT_COMMON_NAME_INVALID 문제를 검색해보니 서버 관련 이슈였지만, 서버에 대한 지식이 전혀 없는 입장이라 프론트 입장에서 일어난 문제일 것이라고 생각하여 블로그 글들을 하나하나 찾아보았습니다. 그들이 해결했던 방법 하나하나 실행을 해보았는데, 정리해보니 다음과 같았습니다.

1. 네트워크 설정 초기화 및 모뎀/공유기 재부팅
2. 인터넷 기록 삭제
3. 이미지를 받아오는 주소가 http인지, https인지 확인
4. 크롬에서 자주 일어나는 문제로 보여 크롬이 아닌 사파리에서 실행을 시켜보았지만, 사파리에서도 콘솔 창에서 인증서 관련 이슈로 나왔습니다. <br>
   <img src="https://raw.githubusercontent.com/cho7778/sample/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-06-29%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%207.59.00.png"/>

그 외에도 에러가 무한으로 계속 추가되는 문제, 받아오지 못한 이미지가 깨져 나오는 문제도 함께 있었다

결국은 어딘가 꼬여있는 것 같다는 생각에, 멘토님께 도움을 요청했습니다. 멘토님께 나온 답변은 다음과 같았습니다.

1. 백엔드에 정확하지 못한 양식으로 저장된 데이터가 많다.
2. 서버를 한번 바꾼 적이 있어 그 전에 저장된 데이터를 불러오는데 문제가 있다.
3. useEffect의 사용

=> 그래서 정리한 코드는 다음과 같습니다.
<br>

```js
const [keywordForSearchUser, setKeywordToSearchUser] = useState('');
const [data, setData] = useState([]);

const token = useRecoilValue(loginState);

const sendQuery = async () => {
  if (!keywordForSearchUser) return;
  const res = await instance.get(
    `/user/searchuser/?keyword=${keywordForSearchUser}`,
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

const handleImageError = (e) => {
  e.target.src = defaultProfileImage;
};

useEffect(() => {
  sendQuery();
}, [keywordForSearchUser]);
```

1. useEffect()를 통해 api통신을 하는 sendQuery 호출을 조절한다.
2. onError처리를 통해 깨져나오던 이미지를 기본 프로필 이미지로 대체한다.
3. 키워드가 없을 경우에는 api 호출을 하지 않는다.

<div markdown="1">

</details>

<br>

## ✨ 리팩토링 예정 목록

- 코드 스타일 통일
- 재사용성 높이기
- 리액트 쿼리 도입
- 이미지 최적화
- 접근성 개선
- 로딩 페이지(스피너 or 스켈레톤)

<p align="right"><a href="#top">(🔼 Top)</a></p>
