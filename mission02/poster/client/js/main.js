/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
const nav = document.querySelector(".nav ul");
const body = document.querySelector("body");
const poster = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");

// 배경 색상 변경 함수
const setBgColor = (node, index) => {
  const dataColor = data[index - 1]["color"];
  node.style.background = `linear-gradient(to bottom,${dataColor[0]},${dataColor[1]})`;
};

//이미지 변경 함수
const setImage = (node, index) => {
  const dataImgName = data[index - 1]["name"].toLowerCase();
  const dataImgAlt = data[index - 1]["alt"];
  node.src = `./assets/${dataImgName}.jpeg`;
  node.alt = `${dataImgAlt}`;
};

//텍스트 변경 함수
const setNameText = (node, index) => {
  const dataNickName = data[index - 1]["name"];
  node.textContent = dataNickName;
};

const handleClick = (e) => {
  e.preventDefault();
  const li = e.target.closest("li");
  if (!li) return;

  //
  [...nav.children].forEach((list) => {
    list.classList.remove("is-active");
  });
  li.classList.add("is-active");

  setBgColor(body, li.dataset["index"]);
  setImage(poster, li.dataset["index"]);
  setNameText(nickName, li.dataset["index"]);

  //애니메이션
  gsap.from(poster, {
    rotate: 100,
    scale: 0.5,
    opacity: 0,
  });

  gsap.to(poster, {
    scale: 1,
    opacity: 1,
  });
};

//클릭 이벤트 활성화
nav.addEventListener("click", handleClick);
