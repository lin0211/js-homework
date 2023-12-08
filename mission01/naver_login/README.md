# [JS] HOME WORK - Mission-01

## 과제 소개

**네이버 로그인 페이지 구현**

- 로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성

## 과제 기간

- 2023.12.06 ~ 2023.12.08

## 개발자

- 정서린

## 개발 환경

- JavaScript

## 상세 정보

### 01. document 내의 요소를 검색

querySelector - 선택자와 일치하는 문서 내 첫 번째 요소를 반환

```js
const inputEmail = document.querySelector(".user-email-input");
const inputPW = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");
```

### 02. email, password 정규표현식을 사용한 조건처리

이벤트 핸들러 방식 - 대상 요소의 해당 onevent 속성에 직접 이벤트를 할당.
classList - 요소의 클래스 목록을 조작하는 데 사용하는 속성.

```html
<input type="email" class="user-email-input" onkeyup="emailValidation()" />
<input type="password" class="user-password-input" onkeyup="pwValidation()" />
```

```js
const emailValidation = () => {
  if (emailReg(inputEmail.value)) {
    inputEmail.classList.remove("is--invalid");
  } else {
    inputEmail.classList.add("is--invalid");
  }
};

const pwValidation = () => {
  if (pwReg(inputPW.value)) {
    inputPW.classList.remove("is--invalid");
  } else {
    inputPW.classList.add("is--invalid");
  }
};
```

### 03. welcome 페이지로 이동

```js
const linkToWelcome = () => {
  location.href = "welcome.html";
};
```

### 04. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교

이벤트 핸들러 방식 - 메서드를 사용하여 핸들러를 요소에 대한 리스너로 등록
preventDefault - 해당 이벤트에 대한 요소의 기본 동작을 실행하지 않도록 지정
조건문 - 데이터의 email, pw와 일치하면 페이지 이동 함수 실행, 불일치시 입력값을 지우고 에러 반환.

```js
const handleLogIn = (e) => {
  e.preventDefault();
  if (inputEmail.value === user.id && inputPW.value === user.pw) {
    linkToWelcome();
  } else {
    inputEmail.value = "";
    inputPW.value = "";
    throw new Error("Not Matched");
  }
};

button.addEventListener("click", handleLogIn);
```
