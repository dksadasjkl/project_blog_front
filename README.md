
# 🔖 목차

> ## [✨ 프로젝트 소개](#-프로젝트-소개-notion)
>
> ## [💼 작업](#-작업-1)
>
> ## [📚 프로젝트 진행 상황 관리](#-프로젝트-진행-상황-관리-1)
>
> ## [🔍 브랜치 전략](#-브랜치-전략-1)
>
> ## [✔ 컨벤션](#-컨벤션-1)
>
> ## [🛠 개발 도구](#-개발-도구-1)
>
> ## [📆 프로젝트 일정](#-프로젝트-일정-1)
>
> ## [📄 API 명세서&ERD 설계도](#-api-명세서erd-설계도-1)
>
> ## [📋 메뉴 구조도](#-메뉴-구조도-1)
>
> ## [🖥 화면 구현](#-화면-구현-1)
>
> ## [💡 느낀점](#-느낀점-1)

<br/>
<br/>

## ✨ 프로젝트 소개 [Notion](https://www.notion.so/Project-1518925d189a8091ba00cfcc07ffca0c)

### 🌟 제목

-   매장용 키오스크 개발

### 🚀 목적

-   학습 내용의 복습 및 활용, 팀원들 간 협업과 과정 이해

### 📆 제작 기간

-   2024.11.06 ~ 2024.12.02

### 🔎 주요 기능

-   관리자 회원가입 및 로그인
-   관리자 모드 메뉴

    > 전체 매출 및 제품별 매출 조회

    > 결제 내역 조회

    > 메뉴 추가/관리

    > 회원 피드백 조회

    > 회원 조회

    > 점포 관리(가게 설정, 비밀번호 변경하기)

-   사용자 모드 메뉴

    > 포장/매장 여부 선택

    > 전체 및 카테고리별 메뉴 선택

    > 결제 방법(카드결제, 카카오페이)

    > 포인트 적립/사용

    > 피드백 작성

    > 주변 관광지 추천 받기

<br/>
<br/>

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>


## 💼 작업

<h3> 🛩 서창현 </h3>

### 🔧 Back-End

-   관리자 회원가입
-   관리자 로그인
-   관리자 점포 로고 변경
-   관리자 비밀번호 변경
-   관리자 비밀번호 확인
-   매출 전체 조회
-   제품별 매출 조회
-   메뉴 카테고리 조회
-   점포 설정
-   점포 이름 변경
-   사용자 전체 조회
-   메뉴 페이지
-   메뉴 추가
-   메뉴 전체 조회
-   메뉴 수정
-   메뉴 삭제
-   메뉴 주문
-   사용자 포인트 조회
-   사용자 포인트 적립 및 사용
-   피드백 저장
-   피드백 조회
-   피드백 카운트
-   사용자 회원가입
-   사용자 회원탈퇴
-   OAuth2 회원가입
-   OAuth2 계정통합



### 🖥 Front-End

-   관리자 메인 페이지
-   관리자 로그인 페이지
-   관리자 점포 매출 페이지
-   관리자 메뉴 추가 페이지
-   관리자 결제 내역 페이지
-   관리자 점포 설정 페이지
-   관리자 메뉴 선택 페이지
-   관리자 로고 변경 페이지
-   관리자 회원가입 페이지
-   관리자 비밀번호 변경 페이지
-   관리자 피드백 페이지
-   관리자 메뉴 관리 페이지
-   관리자 메뉴 수정 페이지
-   관리자 회원 관리 페이지
-   사용자 매장, 포장 선택 페이지
-   메뉴 페이지
-   포인트 메인 페이지
-   포인트 적립 페이지
-   포인트 사용 페이지
-   피드백 메인 페이지
-   관광지 리스트 페이지
-   관광지 추천 메인 페이지
-   결제방법 선택 페이지
-   사용자 메인 페이지
-   OAuth2 메인 페이지
-   OAuth2 로그인 페이지
-   OAuth2 회원가입 페이지
-   OAuth2 계정 통합 페이지
-   피드백 작성 페이지
-   피드백 작성 완료 페이지


> 기타 작업

-   디자인 도안 작업
-   Front 명세서 작성
-   API 명세서 작성
-   DB 설계

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

<br/>
<br/>



## 📚 프로젝트 진행 상황 관리

-   <a href="https://github.com/dksadasjkl/project_kiosk_front/commits/main/">📋 GitHub Commits(Front)  </a>
-   <a href="https://github.com/dksadasjkl/project_kiosk_back/commits/main/"> GitHub Commits(Back) </a>
    -  커밋 리스트
<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>
    
<br/>
<br/>

## 🔍 브랜치 전략

<h3>💡 GitHub Flow 전략</h3>

-   개발과 동시에 지속적으로 배포를 진행할 것이 아니라, 기능을 모두 개발하고 최종적으로 배포를 할 예정이었기 때문에 Git flow에 비해 흐름이 단순해짐에 따라 그 규칙도 단순한 GitHub Flow 전략이 적합하다고 생각했습니다.

-   프로젝트 기간 동안 팀원들이 같은 시간에 작업하기 때문에 잦은 충돌이 발생할 것을 우려하여 충돌의 크기를 줄이고자 GitHub Flow 전략을 채택하여 작은 단위로 이슈를 쪼개 이슈 별로 브랜치를 분기하고 main 브랜치에 지속적으로 merge 하는 방식으로 진행했습니다.

-   기본적으로 master branch에 대한 규칙만 정확하게 정립되어 있다면 나머지 가지들에 대해서는 특별한 관여를 하지 않으며 pull request기능을 사용하도록 권장하였습니다.

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

<br/>
<br/>

## ✔ 컨벤션

팀원 간의 원활한 소통과 협업을 위해 커밋 컨벤션과, 코드 컨벤션을 만들어 이를 따랐습니다. 리드미에는 간략히 작성하고, 자세한 컨벤션은 각각의 타이틀에 링크된 깃허브 위키에 적어두었습니다.

<h3>
<a href="https://mangrove-comic-a17.notion.site/Git-Commit-Message-Convention-8e5410868b7d4bb6a9e61e976d638963">📍 커밋 컨벤션</a>
</h3>

<div>
<pre background-color="#dbdbdb">
<p>
1. 커밋 유형 지정
    - 커밋 유형은 영어 대문자로 작성하기
    - 커밋 유형
    - Feat : 새로운 기능 추가
    - Fix : 버그 수정
    - Docs : 문서 수정
    - Style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
    - Refactor : 코드 리팩토링
    - Test : 테스트 코드, 리팩토링 테스트 코드 추가
    - Chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
    - Design : CSS 등 사용자 UI 디자인 변경
    - Comment : 필요한 주석 추가 및 변경
    - Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
    - Remove : 파일을 삭제하는 작업만 수행한 경우
    - !BREAKING CHANGE : 커다란 API 변경의 경우
    - !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

🧾 2. 제목과 본문을 빈행으로 분리 - 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것 - 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

#️⃣ 3. 제목 첫 글자는 대문자로, 끝에는 . 금지

↩️ 4. 제목은 영문 기준 50자 이내로 할 것

⏺️ 5. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

👆 6. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기

</p>
</pre>
</div>

<h3>
<a href="https://mangrove-comic-a17.notion.site/Code-Convention-ed0bf7dc4b974f17acae503ba05efc24?pvs=74">📍 코드 컨벤션</a>
</h3>
<div>
<pre>
<p>
🛼 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🐫 문장이 종료될 때는 세미콜론을 붙여줍니다.

💄 함수명, 변수명은 카멜케이스로 작성합니다.

🐫 가독성을 위해 한 줄에 하나의 문장만 작성합니다.

❓ 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.

🔠 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

🔢 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

💬 생성자 함수명의 맨 앞글자는 대문자로 합니다.

🔚 var는 절대 사용하지 않는다. (const를 let 보다 위에 선언한다)

👆 const와 let은 사용 시점에 선언 및 할당을 한다. (함수는 변수 선언문 다음에 오도록한다.)

✏️ 외부 모듈과 내부 모듈을 구분하여 사용한다.

🧮 배열과 객체는 반드시 리터럴로 선언한다. (new 사용 X)

📠 배열 복사 시 반복문을 사용하지 않는다.

😎 배열의 시작 괄호 안에 요소가 줄 바꿈으로 시작되었다면 끝 괄호 이전에도 일관된 줄 바꿈 해야한다. (일관되게 모두 줄 바꿈을 해주어야 한다.)

🧶 객체의 프로퍼티가 1개인 경우에만 한 줄 정의를 허용하며, 2개 이상일 경우에는 개행을 강제한다. (객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않음 콜론 뒤는 항상 공백을 강제)

🧂 메서드 문법 사용 시 메서드 사이에 개행을 추가한다.

🌭 화살표 함수의 파라미터가 하나이면 괄호를 생략한다.

🍳 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🧇 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🥞 wildcard import는 사용하지 않는다. (import문으로부터 직접 export하지 않는다.)

🥖 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

🥯 switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.

🥐 삼중 등호 연산자인 ===, !==만 사용한다.

🚐 반복문 사용은 일반화된 순회 메서드 사용을 권장한다.

🚑 람다함수 안에서 밖에 있는 변수를 사용하지 말라

🚚 코드 블럭 주석 처리를 위해서는 한 줄 주석을 사용한다. 여러 줄 주석을 작성할 때는 \*의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둠

💫 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.

</p>
</pre>
</div>

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

<br/>
<br/>

## 🛠 개발 도구

### 1. Back-End

<p>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon Aws-232F3E?style=for-the-badge&logo=Amazon Aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>
</p>

### 2. Front-End

<p>
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTMl5&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
</p>

### 3. Database

<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>

### 4. SCM & Deployment

<p>
<img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
</p>

### 5. Library

-   ### Back-end

<p>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/><img src="https://img.shields.io/badge/MyBatis-271e1f?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3US4hPcRQH8H9RI+Wx8FohkVfkUdQkC5FXxs6WhZSysSBCTWyRZpryWDHZi7LxSGRBKUtKMmGiRB6ZIvPRqbP4u917/zP/maXv6t77u+f7Ped8z/k1GiMANuI29mJuY7yBM/7F2bGQLcR2TMR8rMVsHMJd/MSftirBKgwrx03Mwv1839BuBdHnAfzCezzH1yR9gjv53IdH+IR3uIWudkXn4G0Sf8GQapxuV2QLvmENJqRXXTiGG0k+lAmsrCLpRTc2Y2rJ+YqKuGhVYFmrLPubSh1ODx7jepSOzoq4+E8mNg+TyxKMH1fnCNahP1pUiNuKF2n2ASzBDxwuE7moNQ5iJqZVVLQYr7G+7HA6XrYQuIxd+I2HOIUdafyUaA/WFSttFlmEjzUCx7G/5rynzuiOVI9snpYED2R77tUI7C4jjrKOYjAn6Fx+25bP13ACM3L2qxDxHc3Em3A1l6iID7iAPblo0ZYH6nGkmPl544dncQuXtWcfvo+RfBALWl1ol3L0RotXWF5JXhBamstW5kkRkcyV2J0RkReEJmFnehTGvsHnvLZjuU7GKI+a+D8aBfwFL0hrRFV1ciwAAAAASUVORK5CYII=&logoColor=white">
<img src="https://img.shields.io/badge/Lombok-ca0124?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2aW4hVVRjHP01HzZJGJcpuU6l00Uqzgl4sCrqgDz5IZZjZQxlEaKBJWVA9pEEG3QkqESrtAqWhY+WDQZBpF2ys1DLz0s3spqU2Nr/42GvR19eZaVpzBtaZs39wmLPP3vs/a+219ndbS6SkpKSkpKSk1gEOA14H/gBukXoDmMHfvCf1BHAU8L15AHOlngAeNJ3/Augv9QIwAjhoHsAkqSeAl03nV0tPAjgDuBt4E9gItAAXm/NnAW2h8/r3HOkJAKcElxY7Z1lmrnvE/L5cegLAJGAflTkE3GCu3WnOfQyMlFoGmBw6GWkFloTfTwcGmWsHVHhAvwDjpRYBTnMj/2lH7zQwtJ1Zshc4U2oNYIXr/OBOhL77jQHUjkc+AHpLrQCMcu/52Z2870Vz33bgN3N8tdQKwP2m4Uv/x30nAdvCfa8C9xidt6RWoAhfIxPduaOBdcAmf87kAZcBhwPHGNeps6FBcgcYZzr/M9DPnZ/mjNzzQFMHel+aa0+U3AEWmAYvrnB+mOtUdI865a8HRodZol5kivMkx0nOAL2Are1Nf3PdIOCpdiLD9mjNPisELu1o+le4/oIw8n924gF8KLkDrDQNfiMYLv3b9z/uawJuDpng2mBE1VD+aPRulBrw/W2hsTqi35nGj0rQ09kR+QkYKDkDLDINft98/wrok6C32GgslJyhmMK2imOt/KwEPfUCB8L9OqtGSM4AL5kOf+YM4ZEJevOMRrPkDDDeNLbNjf78BL2BwG6jMUFyhSKD+8g0dr35/quGsgmas41GS9ZZIIXrivwO7DHHdyToaVHkW6MxWXIFODWMcuRdl8oOSNCcaTQ+yXb0gb4hYLGuzkZz1yVo9gd2GY1rJFeA+1yMriMeWa05QRct/2a1L5Kx1T9kGvuOM3xNCZrDXAnsKskRYLhzUS0uo0uK14EXjMbbKTOo2wEGhypOZI8zgs2JU3+i0dCZNUZyA+gHrDEN3e8ehhrBoQm6jW4x5CHJDaCPFjZNI3XKL3P+f2xi8URrAZHPtQ4oOQE0AK/wT+4EnjPH0xK1b3NTP68VIAq/vNx1/olw7njgMWB6ovYVwX1G7pKcoEhIVrnOP1mNsrS+Ls7lNWcV8VGEuBtc51eFabqxK++prg26SpHqNUouUCxI2IRGmQ+8Zo7PTdQ+D/jB6HytK0GSAxQW+XYX4WmF56Zw/vyQ9i5KCVGBqcFbRL5JqRN256akNW7UdXQurIK2prePOu1tWZS4KPz7bDcyMbY/tgr6lwBbnLYWTE6oTg+6bujWuca1hve9oQrl8aUVVn2ezmJlh6Liandhxg0IY7ug2Vt3e4WFDb/Ko//rWskFim1qNqafm1i31/f7IuABYAf/Rh/EM8AQyQngWdPIe0NCYj9HmDC4MdT8dUPTlcCtwMMhZY11+0odX5KNlfcAc+ge1HMs1IclOQMMcSWsVNrCXj7d3Hh5tiWsSgAnh50ZO8MKrP3EjUkHwvHWELLq9tbHQxY3ISX/LykpKSkpKZHu5C8+ETRdu+5D6AAAAABJRU5ErkJggg==&logoColor=white">
</p>

-   ### Front-end
<p>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-cb0096?style=for-the-badge&logo=react&logoColor=white">
</p>

### ⛓️ pom.xml(Back-end)

| 라이브러리                          | 용도                                  |
| ----------------------------------- | ------------------------------------- |
| lombok                              | 어노테이션(@)으로 코드 자동 생성      |
| spring-boot-starter-security        | spring security 적용                  |
| spring-boot-starter-validation      | 입력 값 검증                          |
| spring-boot-starter-web             | Spring Web 프로젝트에 필수 라이브러리 |
| spring-boot-starter-test            | 프로젝트 작동을 테스트하는 역할       |
| mybatis-spring-boot-starter         | 백엔드에서 MyBatis 문법 적용          |
| spring-boot-devtools                | 빠른 재시작                           |
| mysql-connector-java                | DB인 MySQL과 연결                     |
| jjwt-api / jjwt-impl / jjwt-jackson | JWT(JSON Web Token) 활용              |
| spring-boot-starter-oauth2-client   | Oauth2 인증                           |
| spring-boot-starter-aop             | spring aop 적용                       |
| spring-boot-starter-thymeleaf       | 동적인 화면 생성의 역할               |

### ⛓️ node_modules(Front-end)

| 모듈 이름                                                                   | 용도                                       |
| --------------------------------------------------------------------------- | ------------------------------------------ |
| emotion/react, emotion/styled                                               | 리액트 내 css 적용                         |
| portone/browser-sdk                                                         | QR 코드로 결제 기능 구현                   |
| react-google-maps/api                                                       | 구글 맵을 불러와 화면에 구현               |
| testing-library/jest-dom, testing-library/react, testing-library/user-event | 리액트 dom 테스트                          |
| axios                                                                       | 서버로 요청을 보내 통신                    |
| firebase                                                                    | 저장된 이미지를 업로드                     |
| react-dom, react-router-dom                                                 | 주소 요청 발생 시 각 페이지로 이동         |
| react-icons                                                                 | 리액트 아이콘을 불러와 사용                |
| react-query                                                                 | 서버 데이터 동기화(fetching, caching) 지원 |
| react-select                                                                | select 요소를 쉽게 사용                    |
| react-switch                                                                | 토글 기능 스위치 구현                      |
| react, react-scripts                                                        | 리액트 라이브러리 적용                     |
| recharts                                                                    | 가져온 데이터를 차트로 시각화하는 역할     |
| recoil                                                                      | 전역 상태 관리                             |
| styled-reset                                                                | 초기 CSS 스타일 재설정                     |
| sweetalert2                                                                 | 알림창 구현                                |
| uuid                                                                        | 고유 아이디 값을 생성하는 함수 제공        |
| web-vitals                                                                  | 사용자의 웹 바이탈 항목 측정               |

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

<br/>
<br/>

## 📆 프로젝트 일정

![스크린샷 2024-05-07 오전 11 43 01](https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/2dcefa79-71da-4f61-ab5a-dba055d17ad4)
![스크린샷 2024-05-07 오전 11 43 05](https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/dba81999-e57a-40ee-a4fe-b4b2a2702241)

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

<br/>
<br/>

## 📄 API 명세서&ERD 설계도

### 🛰 API 명세서

https://www.notion.so/1518925d189a80f3a0ecf6a694f780d0?v=1518925d189a81b48af5000c5ef9146d

### 📐 ERD 설계도

![ERD 다이어그램](https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/5074a2e8-503f-48f6-9b48-dfd2a56f7938)

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

<br/>
<br/>

## 📋 메뉴 구조도

### 🧑‍🤝‍🧑 사용자 메뉴 구조도

![사용자 메뉴 구조도](https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/cf4b1b29-41a2-49b3-bd88-e5b296974160)

### 👷‍♂️ 관리자 메뉴 구조도

![관리자 메뉴 구조도](https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/8077db0a-0d1b-4ee8-87bb-4f4117c9f527)

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

<br/>
<br/>

## 🖥 화면 구현

### 🔐 관리자 계정 화면

<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/78b652d9-54cc-47e4-86ce-9d6d2d747096" align="center" width="100%"/> -->
    <b>로그인 화면</b>
</div>
<br/>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/0b3f8595-a078-4318-8733-09999dd1c76d" align="center" width="100%"/> -->
    <b>로그아웃 화면</b>
</div>
<br/>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/bb8c4ddd-907d-4176-9d29-3258eae0a5ae" align="center" width="100%"/> -->
    <b>회원가입 화면</b>
</div>
<br/>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/285eeebe-a43f-4415-af11-0eeffb5ce75c" align="center" width="100%"/> -->
    <b>OAuth2 카카오 계정통합 화면</b>
</div>

### 🍔 주문 화면

<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/ae645259-b387-4786-8e59-310bc95e28f2" width="100%"/> -->
    <b>주문 화면</b>
</div>
<br/>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/967cca31-340c-4725-acea-287457104b58" width="100%"/> -->
    <b>큰글씨 모드 주문 화면</b>
</div>
<br/>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/c53f6ce1-f9df-4ec2-888f-43db0b6c8e89" width="100%"/> -->
    <b>포인트 적립 결제화면</b>
</div>
<br/>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/b57232fd-74b6-4416-a988-4139407fe249" width="100%"/> -->
    <b>포인트 사용 결제화면</b>
</div>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/f2cb1cc8-3f14-4cce-9c2d-34003626bcfb" width="50%" /> -->
    <br/>
    <b>카카오페이 결제 화면</b>
</div>

### 📨 피드백 화면

<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/8f228aed-e36a-484e-bf38-1f4c326668f7" width="100%"/> -->
    <b>피드백 작성 화면</b>
</div>

### 🏖 관광지 추천 화면

<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/6b81d711-e5bc-4457-8283-5bc337d4cb82" width="100%"/> -->
    <b>관광지 추천 리스트 및 지도 화면</b>
</div>

### 🛠 관리자 화면

<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/2bcb3cb7-00da-4bdf-a927-63b7d5eda19c" width="100%"/> -->
    <b>관리자 모드 진입 및 메인 화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/77e261b0-0287-4186-861b-96498588793f" width="100%"/> -->
    <b>점포 매출 조회 화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/d4658ac1-4972-4e03-bc73-a731471fbf78" width="100%"/> -->
    <b>결제내역 조회 및 결제 취소화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/c057c13a-aa9c-4e0e-92de-d01d6dd600cb" width="100%"/> -->
    <b>메뉴 추가 화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/b1c25fb8-1047-4144-ba69-7290033cbfab" width="100%"/> -->
    <b>메뉴 수정 화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/1209a493-57a7-4df5-9060-ee3b42dbf235" width="100%"/> -->
    <b>피드백 조회 화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/39fec679-0c6a-4f78-8925-fdc26cdce27d" width="100%"/> -->
    <b>회원조회 및 관리 화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/9d108c01-c398-4dd3-a518-051d3fced191" width="100%"/> -->
    <b>점포 설정 및 점포 이름 변경 화면</b>
</div>
</br>
<div align="center" dir="auto">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/106566223/33ab6ec0-4927-4992-b694-367fb6a2ebbf" width="100%"/> -->
    <b>점포 로고 변경 화면</b>
</div>

<p align="right" dir="auto">
<a href="https://github.com/dksadasjkl/project_kiosk_front">TOP 🔼</a>
</p>

</br>
</br>

## 💡 느낀점

### 서창현

<div align="center">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/50f5a224-bbbc-4486-9ce0-b873d962898d" width="200" height="200" /> -->
</div>
<span>이번 한 달 반의 기간동안 프로젝트를 진행하게 되면서 많은 것을 느꼈습니다. </br>먼저 이번 프로젝트에서 팀장을 맡게 되면서 책임감을 느끼게 되었고 제가 조금 더 열심히 해서 프로젝트를 잘 마무리 하고 싶다고 생각했습니다. 그 과정에서 팀을 이끌어가기 위해 어떻게 노력해야 할지 고민을 많이 했습니다. 팀원들 각자 맡은 부분을 수행하면서 막히는 부분은 함께 고민하고 제가 아는 대로 알려주며 진행하였습니다. 그렇게 팀원과 저는 복습의 효과를 봄과 동시에 새롭게 알게 되는 부분도 생겨나 서로 윈윈이 되며 프로젝트를 진행하였습니다. </br>또 팀 프로젝트기에 팀원 간의 소통을 중요시 생각했습니다. 그래서 팀원들이 각자의 의견을 적극적으로 주장하고 서로 피드백을 해줄 수 있도록 분위기를 조성하였습니다. </br>이번 프로젝트를 진행하면서 팀장이 아닌 팀원으로서 느낀 부분도 많았습니다. 특히 배포과정에서 공부를 더 해야겠다고 느꼈습니다. 개발 하면서 가장 어려웠던 부분이 배포하는 단계였는데 처음으로 무중단 배포를 해보는 것이라 생소하기도 했고 특히 EC2를 이용하여 DOCKER 컨테이너에 서버를 실행시키는 것이 이론적으로는 이해를 했지만 막상 실습을 할때는 막히는 부분이 많았기 때문입니다. </br>또한 프로젝트를 기획하고 서버를 구축하기 전 데이터베이스를 설계할 때 데이터 정규화의 중요성을 느꼈습니다. 데이터 정규화가 제대로 되지 않은 데이터베이스를 설계하면 불필요한 데이터가 삽입되거나 원하는 데이터를 가져오는데 쉽지 않아 심하면 데이터베이스를 다시 설계 해야 한다는 것을 배웠습니다. </br>이렇게 이번 프로젝트에서 많은 것을 배우고 느끼고 하면서 다음 프로젝트를 진행할 때는 좀 더 잘할 수 있을 거 같다는 자신감도 생겨났습니다. 그리고 잘 따라와 준 팀원들에게 고맙다라는 말을 전해주고 싶습니다.
</span>

---

### 서창현2

<div align="center">
<!--     <img src="https://github.com/Novel-Ideas/gumeonggage-front/assets/83110386/37d1fc3b-f435-44d0-adb4-0404c1b71837" width="200" height="200" /> -->
</div>
<span>첫 팀 프로젝트라 협업, 명세서, 구조, 진행 방향 등 걱정하는 게 많았는데 기획하는 과정 동안 소통하며 함께 작업하는 동안 협업이 중요하다는 걸 더욱 깨달았습니다.
프로젝트를 진행하며 맡은 부분을 구현하며 동기, 비동기 부분을 포함하며 모르던 부분을 공부하며 알던 것도 다시 공부하는 시간을 가질 수 있었습니다. 그리고 내가 아닌 다른 사람의 코드를 보면서 처음은 코드를 해석하는 부분이 어려운 부분도 있었지만 이런 식으로도 가능하구나를 깨달을 수 있었습니다.
그 과정에서 내가 작성한 코드를 다른 사람이 알기 쉽게 작성하는 것이 중요하다는 점을 깨달았습니다.
그리고 프로젝트를 진행하며 맡은 부분이 있으니 더욱 책임감이 생기고, 그걸 해내면 성취감까지 느낄 수 있었습니다.
처음 하는 팀 프로젝트라 걱정이 많았지만 팀장이 이끌어주고 조원이 뒤에서 밀어주며 팀 프로젝트를 잘 마무리할 수 있었습니다.</span>

---
