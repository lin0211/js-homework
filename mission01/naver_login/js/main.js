const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

const inputEmail = document.querySelector(".user-email-input");
const inputPW = document.querySelector(".user-password-input");

// 1.email 정규표현식을 사용한 조건처리
function emailValidation() {
  if (emailReg(inputEmail.value)) {
    inputEmail.classList.remove("is--invalid");
  } else {
    inputEmail.classList.add("is--invalid");
  }
}

// 2. pw 정규표현식을 사용한 validation
function pwValidation() {
  if (pwReg(inputPW.value)) {
    inputPW.classList.remove("is--invalid");
  } else {
    inputPW.classList.add("is--invalid");
  }
}
// 3. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
// 4. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
function checkIdPW() {
  if (inputEmail.value === user.id && inputPW.value === user.pw) {
    linkToWelcome();
  } else {
    console.log("error");
  }
}

// 페이지 이동
function linkToWelcome() {
  window.location.href = "welcome.html";
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
