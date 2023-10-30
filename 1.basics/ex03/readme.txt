ex03: 전통적인 DOM 기반의 Application: JS module system을 사용한 파일 분리II

1. ES6 모듈 시스템을 지원하는 브라우저에서는 ES6 모듈 시스템 기반으로 분리된 JS 모듈 간의 의존성을 보장해준다.
2. 자바스크립트 외의 다양한 에셋(css, image, font)의 로딩 동기화는 불가능하다.


import, export 사용했기 떄문에 type="module"을 추가해주면,
<script type="module" src="index.js"></script>를 먼저 작성해줘도 된다.