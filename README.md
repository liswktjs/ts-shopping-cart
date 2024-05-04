## 실행 방법

1.  json-server 설치

```
npm i -g json-server
```

2. 명령어 실행

```
pnpm install
pnpm run dev
pnpm run server
```

## 설치 라이브러리

- 스타일: styleX
- 상태관리: tanstack query, jotai

## 폴더 구조

이유 : styleX를 사용해보니 styleX 특성상 관련 로직들이 응집성있게 모여 있는 것이 낫다고 생각함 + fsd 활용

- shared

  - components
    - Button
    - Text
  - layout

- ## feature
- pages
  - home
  - OrderDetail
  - OrderList
  - OrderPayment
  - ProductDetail
  - ShoppingChart
