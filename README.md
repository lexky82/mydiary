# MyDiary

![logo](ReadMeImage/diaryIcon.png)

✔[사이트 링크](http://18.217.128.228:5000/login)
**MyDiary 프로젝트의 Repository 입니다.**

## 프로젝트 개요

- 프로젝트 명 : MyDiary
- 개발 인원 : 1명
  - FullStack : **권혁진**
- 개발 기간 : 2021.06.25 ~ 2021.07.21
- 개발 언어 : Frontend : TypeScript, Backend : JavaScript
- 개발 라이브러리
  - Frontend : React, SWR, Emotion, Antd, Axios, Chart.js, Material UI, Google-Maps API
  - Backend : Express, Mongoose, Multer, AWS EC2
  - Database : MongoDB
- 형상 관리 툴 : Git
- 간단 소개 : 자신에 하루를 퀄리티 있게 기록하는 일기장 웹앱 서비스

## 프로젝트 특징

- 일기를 작성할때 당일 자신의 기분과 날씨 그리고 활동했던 지역을 지도에서 선택하고 이미지를 업로드할 수 있다.
- 사용자가 작성한 일기를 바탕으로 차트, 달력, 지도로 상세하게 일기를 조회할 수 있다.
  
- SWR을 사용해서 비동기 상태관리를 함.

- 반응형 디자인
  - 모바일 모드: 주요 모델 지원 UI
  - 데스크탑 모드: 데스크탑 환경에서 한눈에 볼 수 있는 UI

## 프로젝트 기능

- 회원가입 및 로그인 쿠키 생성 유효성 검증

- 일기를 작성할때 그날의 날씨, 기분을 선택하여 작성할 수 있으며 그날 사용자가 활동했던 지역을 구글맵을 통해 선택

- 일기에 이미지 첨부 가능

- 메인 페이지(/)에서 현재까지 사용자가 작성한 일기를 기반으로 통계, 차트를 렌더링

- 사용자가 작성한 일기의 날짜를 기반으로 달력에 그날의 날씨와 기분을 표시 특정 일(day)를 클릭하면 그 날의 작성했던 일기를 렌더링

- 사용자가 작성한 일기의 위치를 기반으로 구글맵에 마커를 표시하고 마커를 클릭하면 해당 위치를 등록한 일기를 렌더링

- 일기를 Text로 검색가능

- 일기를 상세하게 보는 페이지

## 개발 정리문서
[🔎 프로젝트를 진행하면서 경험했던 문제나 구현방법을 서술한 블로그 ](https://tried.tistory.com/category/React/MyDiary)
