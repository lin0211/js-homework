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
const button = document.querySelector(".btn-login");

// 1.email 정규표현식을 사용한 validation
const emailValidation = () => {
  if (emailReg(inputEmail.value)) {
    inputEmail.classList.remove("is--invalid");
  } else {
    inputEmail.classList.add("is--invalid");
  }
};

// 2. pw 정규표현식을 사용한 validation
const pwValidation = () => {
  if (pwReg(inputPW.value)) {
    inputPW.classList.remove("is--invalid");
  } else {
    inputPW.classList.add("is--invalid");
  }
};

// 페이지 이동
const linkToWelcome = () => {
  location.href = "welcome.html";
};

// 3. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
// 4. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
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

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

//제출
//https://docs.google.com/forms/d/e/1FAIpQLSdkPbV4Fx0pjUHabjG3uWEsU7PkLe71o3oaQj5r-0KrjpZaCA/viewform
