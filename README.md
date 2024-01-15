# Getting Started with Create React App

해당 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 사용하여 세팅했습니다.

## Project Tree

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

## Available Scripts

이 프로젝트에서는 다음과 같은 명령어들을 실행할 수 있습니다.:

### `npm start` or `yarn start`

프로젝트를 development mode로 실행합니다.\
[로컬 주소](http://localhost:3000)를 통해 확인하실 수 있습니다. to view it in the browser.

### `npm run server` or `yarn server`

제공한 로컬 서버를 실행시킵니다. 서버를 실행시키지 않으면 더미 데이터를 확인할 수 없으니 꼭 함께 실행해주세요.
