# kwinfocont

## 개인(minsu.rob) 기록용 파일이오니 읽으실 의무는 없습니다 _ _)

## 프로젝트 구조
```
.
+-- assets
+-- empty
|   +-- empty        # empty
|   +-- empty      # empty
```
## 상단메뉴 내의 신규 페이지 구현 절차
상단 nav bar의 새로운 Page를 생성하기 위해 변경해야하는 파일들 정리.

- **src\router\index.ts**
  - VueRouter 추가하는 부분으로 path, name , file을 추가하면 됌.
  - name은 menus.ts의 path와 매칭, file은 views와 물리파일과 매칭.
- **src\store\state\menus.ts**
  - 트리 구조로 생기는 메뉴바를 정의하는 파일
  - 화면단 메뉴에서 표시되는 **텍스트**를 수정하는 부분
- **src\views\XXX.vue**
  - 실제 페이지 구현 부분 
  - 열심히 개발해주시면 됩니다.
## Views Folder
해당 폴더에는 menus.ts에 명시되어있는 실제 구현파일이 존재.
  > Router에 연결될 실제 Vue를 가진 부모 화면

## File Structure
- 연혁
  - SectionTitle - 키보드 이미지 밑 제목
  - SectionMainHistory
    - BaseSmallTitle 
    - BaseHistory - 실제 구현 부분
      - 데이터는 veux에서 받아옴

- **구현된 메뉴(rough)**
  - (21.03.29)
    - 학과소개
      - 학과장 소개
      - 연혁
    - 교육과정
      - 커리큘럼(Refactor)
        - BaseTitle.vue를 넣어서 개발하기.
        - BaseHistory.vue 데이터 ts에서 어떻게 얻어오는지 확인.
        - 
- **Todo**
  - 교수 소개
    - 정교수
    - 외래교수
  - 학사일정
  - 공지사항

  - 평가 계획서 about

## empty
```
empty
```

[원문으로 돌아가기](README.md).