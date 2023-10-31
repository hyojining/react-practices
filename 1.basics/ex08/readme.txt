ex08: JSX tutorial
01. 특징1: HTML과의 차이점
02. 특징2: single root
03. 함수 컴포넌트
04. Pure React(React API) 컴포넌트
05. 클래스 컴포넌트
06. 특징3: JSX 표현식 표기법: { javascript expression }
07. Comment

rsf: 함수형 컴포넌트
rsc: 함수형 컴포넌트 (화살표 함수)

rcc: 클래스 컴포넌트

JSX에서는 블락 안에 표현식만! (주석 가능)
====================================================================================

1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2) 라이브러리
        $ npm i react react-dom

2. 설정
    1) webpack.config.js
    2) babel.config.json

3. 스크립팅
    "scripts": {
        "debug": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }

4. 테스트 서버 실행
    $ npm run debug src=(01|02|03|04|...)