# kwinfocont

## 프로젝트 구조
```
.
+-- assets
+-- components
|   +-- base        # 섹션에서 이용 가능한 재활용성을 높인 최소단위의 공용 컴포넌트
|   +-- layout      # 베이스 레이아웃을 꾸미기 위한 Appbar, footer, drawer 등의 최상위 컴포넌트
+-- layout          # 베이스 레이아웃을 저장하기 위한 디렉토리
|   +-- Index.vue   # 가장 기본이 되는 베이스 레이아웃
+-- router
+-- views           # Router에 연결될 실제 Vue를 가진 부모 화면
|   +-- section     # 부모 Vue에서 호출되는 세부적인 섹션 컴포넌트
```

## route 연결시 주의사항
path의 경우 소문자와 케밥스타일로, name의 경우 대문자와 카멜스타일로 코딩해주시길 바랍니다.

## eslint에 관해서
해당 프로젝트는 eslint에서 제공하는 기본 코딩컨벤션을 따르고 있습니다.
불편한 부분은 추후 개선할 예정이니 기본적인 코딩 컨벤션에 따라주어 코딩해주시길 바랍니다.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Don't see [DONT_README](DONTREADME.md).