# Getting Started with Create React App

해당 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 사용하여 세팅했습니다.

## Project Tree

```
📦public
┣ 📂images
┃ ┗ 📜defaultImage.png // 기본 상품 이미지
┗ 📜index.html

📦src
┣ 📂api // Axios Instance와 API Routes를 관리합니다.
┣ 📂assets // icon이나 App에서 사용하는 색상 정보와 같은 상수 데이터를 관리합니다.
┃ ┣ 📂icons
┃ ┗ 📜colors.json
┣ 📂components
┃ ┣ 📂common // 공통적으로 사용되는/사용될 컴포넌트를 분리합니다.
┃ ┣ 📂order // order page에서 사용되는 컴포넌트를 관리합니다.
┣ 📂context // 전역 으로 사용되는 정보를 Context API를 통해 관리합니다.
┣ 📂db
┃ ┗ 📜db.json // 제공해주신 로컬 서버입니다.
┣ 📂hooks
┣ 📂models // db에 저장된 Product의 타입을 관리합니다.
┣ 📂pages
┣ 📂stores
┣ 📂utils // 여러 파일에서 함수처럼 사용되는 코드를 관리합니다.
┣ 📜App.tsx
┣ 📜index.tsx
┣ 📜router.tsx // App의 Routes를 관리합니다.
```

## Available Scripts

이 프로젝트에서는 다음과 같은 명령어들을 실행할 수 있습니다.:

### `npm start` or `yarn start`

프로젝트를 development mode로 실행합니다.\
[로컬 주소](http://localhost:3000)를 통해 확인하실 수 있습니다. to view it in the browser.

### `npm run server` or `yarn server`

제공한 로컬 서버를 실행시킵니다. 서버를 실행시키지 않으면 더미 데이터를 확인할 수 없으니 꼭 함께 실행해주세요.

## 주문 실패 발생시키기

1. 로컬 서버와 함께 React App을 실행시킨 뒤 `/order`로 접근합니다.
2. 서버를 끄고 주문하기 버튼을 클릭합니다.
3. 주문 실패가 발생하여 `/error`로 이동한 뒤 3초 뒤에 `/order`로 되돌아옵니다.
4. 주문 실패의 경우 재시도 할 수 있기 때문에 사용자가 이전에 적용했던 `상태를 유지`시켜둡니다.

> 주문 성공의 경우 모든 상태를 `초기 상태`로 되돌립니다.
