[![Netlify Status](https://api.netlify.com/api/v1/badges/f500616b-67ef-4e18-9ff3-2181af7b31a6/deploy-status)](https://app.netlify.com/sites/admiring-snyder-88f4ea/deploys)

# 원티드-프리온보딩코스-선발과제

## 🚀 배포

[배포주소 바로가기](wanted-preonboarding.netlify.app)

## 🧐 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/Jeong-jeong/wanted-preonboarding-course.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```

## 📄 요구사항

- 원티드 페이지 상단 영역 React 기반 클론

### 상단 GNB (Global Navigation Bar) ✅

| **sm < 768px** |
| :-: |
| ![sm](https://user-images.githubusercontent.com/68528752/149716114-3096cd7a-c748-4196-a2ce-62e1c416dfa6.png) |
| **768px <= md < 992px** |
| ![md](https://user-images.githubusercontent.com/68528752/149716314-27a0aaa5-0313-45c5-8116-f1a3ff3b2c7d.png) |
| **992px <= lg < 1100px** |
| ![lg](https://user-images.githubusercontent.com/68528752/149716356-5676a3e9-92a6-40df-89dc-856531c2c494.png) |
| **1100px <= xl < 1200px** |
| ![xl](https://user-images.githubusercontent.com/68528752/149716420-87e56596-c5c2-4d2e-a909-17d2e56bf570.png) |

<br>
<br>

### 슬라이드 (캐러샐) 영역 ✅

| **스와이프 이벤트** |
| :-: |
| ![기본스와이프](https://user-images.githubusercontent.com/68528752/149719757-536f5057-d35a-4a56-957d-fe806aa78cca.gif) |
| **자동 스와이프 이벤트** |
| ![자동스와이프](https://user-images.githubusercontent.com/68528752/149719762-6e2bcd31-8af8-41e0-98ea-202d3011ab0e.gif) |
| **왼쪽/오른쪽 버튼 이동** |
| ![버튼이동](https://user-images.githubusercontent.com/68528752/149719753-f428a3e2-13c5-4faf-bc53-239da33f5fc7.gif) |
| **가운데 정렬** |
| ![가운데정렬](https://user-images.githubusercontent.com/68528752/149719745-3fb9889d-32e0-4af5-b3da-82903771ef43.gif) |
| **threshold(120) 이상 스와이프 처리** |
| ![threshold](https://user-images.githubusercontent.com/68528752/149719981-877dd026-9a1f-4ed3-9266-d0af417cdecd.gif) |
| **마우스 아웃 처리** |
| ![마우스아웃처리](https://user-images.githubusercontent.com/68528752/149719752-79caae07-5233-46eb-9902-82f899176777.gif) |

### 반응형 구현 ✅

```js
const breakpoints = {
  xl: 1200,
  lg: 1100,
  md: 992,
  sm: 768,
}
```
