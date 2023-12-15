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

// 배경 변경 함수
const setBgColor = (node, index) => {
  let [dataColorA, dataColorB] = data[index - 1]["color"];
  if (!dataColorB) {
    dataColorB = "#000";
  }
  node.style.background = `linear-gradient(to bottom,${dataColorA},${dataColorB})`;
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

//오디오 실행 함수
const setAudio = (index) => {
  const dataAudioSrc = `./assets/audio/${data[index - 1]["name"]}.m4a`;
  const audio = new AudioPlayer(dataAudioSrc);
  audio.play();
};

//애니메이션
const setAnimation = (node) => {
  gsap.from(node, {
    rotate: 100,
    scale: 0.5,
    opacity: 0,
  });

  gsap.to(node, {
    scale: 1,
    opacity: 1,
  });
};

const handleClick = (e) => {
  e.preventDefault();
  const li = e.target.closest("li");
  if (!li) return;

  [...nav.children].forEach((list) => {
    list.classList.remove("is-active");
  });
  li.classList.add("is-active");

  setBgColor(body, li.dataset["index"]);
  setImage(poster, li.dataset["index"]);
  setNameText(nickName, li.dataset["index"]);
  setAudio(li.dataset["index"]);
  setAnimation(poster);
};

//클릭 이벤트 활성화
nav.addEventListener("click", handleClick);
