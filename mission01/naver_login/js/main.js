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

const linkToWelcome = () => {
  location.href = "welcome.html";
};

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
