ex02: 전통적인 DOM 기반의 Application: 단순하게 파일 분리

1. 복잡한 애플리케이션은 코드를 분리해서 개발하는 것이 원칙이다.
2. 전통적인 분리 방식으로 애플리케이션을 분리
    - 브라우저는 분리되어 있는 JS 파일들의 로딩 순서를 보장하지 않는다.
    - 복잡해지고 분리 JS 파일들이 많아지면 의존성 관리 자체가 불가능하다.

index.html에서 <script src="App.js"></script>, <script src="index.js"></script> 위치 바꾸면 에러 발생
<script src="App.js"></script>을 먼저 작성해야 한다.