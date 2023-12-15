# [JS] HOME WORK - Mission-02

## 과제 소개

**이벤트에 의한 상호작용 구현**

- 썸네일 이미지를 클릭하면 메인 이미지, 메인 타이틀, 배경, 음성이 바뀔수 있도록 코드 로직을 작성

## 과제 기간

- 2023.12.14 ~ 2023.12.15

## 개발자

- 정서린

## 개발 환경

- JavaScript

## 상세 정보

### 1. document 내의 요소를 검색

querySelector - 선택자와 일치하는 문서 내 첫 번째 요소를 반환

```js
const nav = document.querySelector(".nav ul");
const body = document.querySelector("body");
const poster = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");
```

### 2 함수 선언

#### 2-1 배경 변경

입력된 노드에 저장된 데이터의 index로 배경 변경

- 배열구조분해로 데이터의 색상을 받음
- if 조건문을 이용한 기본 두번째 배경색상을 설정

```js
const setBgColor = (node, index) => {
  let [dataColorA, dataColorB] = data[index - 1]["color"];
  if (!dataColorB) {
    dataColorB = "#000";
  }
  node.style.background = `linear-gradient(to bottom,${dataColorA},${dataColorB})`;
};
```

#### 2-2 이미지 변경

입력된 노드에 저장된 데이터의 index로 이미지 변경

```js
const setImage = (node, index) => {
  const dataImgName = data[index - 1]["name"].toLowerCase();
  const dataImgAlt = data[index - 1]["alt"];
  node.src = `./assets/${dataImgName}.jpeg`;
  node.alt = `${dataImgAlt}`;
};
```

#### 2-3 텍스트 변경

입력된 노드에 저장된 데이터의 index로 텍스트 변경

```js
const setNameText = (node, index) => {
  const dataNickName = data[index - 1]["name"];
  node.textContent = dataNickName;
};
```

#### 2-4 오디오 실행

저장된 데이터의 index로 오디오 실행 - 저장된 오디오 생성자 함수를 이용한 오디오 플레이

```js
const setAudio = (index) => {
  const dataAudioSrc = `./assets/audio/${data[index - 1]["name"]}.m4a`;
  const audio = new AudioPlayer(dataAudioSrc);
  audio.play();
};
```

#### 2-5 애니메이션 실행

gsap을 이용한 간단한 애니메이션 효과

```js
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
```

### 3. 썸네일을 클릭시 상호작용

이벤트 처리방식 - 클릭에 의한 이벤트 작동으로 리스트보다 상위인 ul 요소에 이벤트를 위임.

li는 클릭된 node가 무엇이든 가까운 상위의 li 요소를 찾아 반환하며, 리스트가 아닌 node를 클릭시 return하는 조건을 주어 오류를 방지.

썸네일 클릭 효과 - 클릭되었을 때 다른 썸네일은 forEach를 통해 'is-active' 클래스를 모두 제거하고 선택된 대상만 클래스 삽입.

li의 커스텀 속성인 data-index를 불러온 index값으로 모든 함수 실행

```js
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

nav.addEventListener("click", handleClick);
```
