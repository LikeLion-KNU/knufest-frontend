# 2024 경북대 대동제 '하푸르나 웹페이지'
<img src="https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/471dd2c9-a476-42dd-a3ad-bc79fd62976f" width="300" height="300"/>
<img src="https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/016a9f21-0913-4fed-b418-fc69edb29f50" width="300" height="300"/>
<img src="https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/d7b444ce-1593-4e20-a4cf-5f423919943d" width="300" height="300"/>
<img src="https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/3e17f361-b63a-46aa-9c51-2812d8009bf4" width="300" height="300"/>
<img src="https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/2b25f3b3-d9f9-40f8-9c43-480ede42985d" width="300" height="300"/>
<img src="https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/d013e896-3390-4de8-bf02-25d9fb66e805" width="300" height="300"/>

# 프로젝트 소개
 *  2024 경북대 대동제 '하푸르나'의 웹페이지
 *  하푸르나의 부스정보와 공연정보, 타임테이블을 제공
 *  축제의 시작시간, 종료시간을 실시간으로 제공
 *  공식 서비스 기간: 2024.05.20 ~ 2024.05.24 (총 5일)
 *  총 이용자수: 1.1만 명, 총 이벤트 수: 23만 (Google Analytics 기준)


# 팀원 구성
## Front-End
김대건
이효은
조동필
채준혁
## Back-End
이동건
전지웅
최정식

# 프로젝트 구조
## 기술 스택
### Front-End

### Back-End
<img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">


# 개발 기간 및 작업 관리
* 기획 및 디자인: 05/01 ~ 05/08
* 개발: 05/07 ~ 05/19
* 인프라 구축: 05/18 ~ 05/19
* 테스트: 05/19 ~ 05/20
* 오픈 및 안정화: 05/20 ~ 05/22


# 페이지별 기능
### 메인페이지
![IMG_7495](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/b955bd16-2d1c-4ba7-9206-cfc34f33887f)



### 부스별 지도
![IMG_7496](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/e7870c5b-18f4-419f-8586-dd59a07c3d6f)


### Special Guest
![IMG_7497](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/ec8749df-a40a-43c3-aa78-60eb424b5092)


### 이벤트 일정
![IMG_7498](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/fd4fcda8-ddee-4cbc-856f-d3371daf80fe)


### 만든이들
![IMG_7499](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/695f3a97-fa49-45ac-ab39-c331af3fd306)




# Hotfix



# 사용자 수 분석





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
