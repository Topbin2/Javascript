"usestrict";

//change imoticon
const imoticon = document.querySelector('.imoticon');
const arr = ['😍', '😘', '😝', '🤩'];

function changeItc() {
    const randomNum = Math.floor(Math.random() * arr.length);
    imoticon.innerText = arr[randomNum];
}

setInterval(changeItc, 1000);


//set time
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const setDate = () => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
};

setDate();
setInterval(setDate, 1000);

//set username
const username = document.querySelector(".username");
const nameSubmit = document.querySelector(".name-submit");
const nameInput = document.querySelector(".name-input");
const savedUserName = localStorage.getItem("username");
const HIDDEN_CLASSNAME = "hidden";

if (savedUserName === null) {
  username.classList.add(HIDDEN_CLASSNAME);
  nameSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("username", nameInput.value);
    nameInput.classList.add(HIDDEN_CLASSNAME);
    username.innerText = `안녕, ${nameInput.value}!`;
    username.classList.remove(HIDDEN_CLASSNAME);
  });
} else {
  username.classList.remove(HIDDEN_CLASSNAME);
  nameSubmit.classList.add(HIDDEN_CLASSNAME);
  username.innerText = `안녕, ${savedUserName}!`;
}

//set todo-list
const todoSubmit = document.querySelector(".todo-submit");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

function createList() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
  span.innerText = todoInput.value;
  button.innerText = "x";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

todoSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  createList();
  todoInput.value = "";
});

//weather APIs
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f41b39cbcc6ab04727e628ea8b626de7&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const name = data.name;
        const position = document.querySelector('.weather-position');
        position.innerText = name;
    });
}

function onGeoError() {
    alert("Can't find you, No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
