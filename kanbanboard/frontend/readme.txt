kanbanboard: Frontend

1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions concurrently
    2) 라이브러리
        $ npm i react react-dom prop-types react-addons-update

2. 설정
    1) webpack.config.js
    2) babel.config.json

3. 스크립팅
    "scripts": {
        "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development",
        "build": "npx webpack --config config/webpack.config.js --mode production"
    }

4. 테스트 서버 실행
    $ npm run debug