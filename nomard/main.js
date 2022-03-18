"usestrict";

//set time
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const setDate = () => {
  const date = new Date();

  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
};

setDate();
setInterval(setDate, 1000);

//set username
const username = document.querySelector('.username');
const nameSubmit = document.querySelector('.name-submit');
const nameInput = document.querySelector('.name-input');
const savedUserName = localStorage.getItem('username');
const HIDDEN_CLASSNAME = 'hidden';

if (savedUserName === null) {
    username.classList.add(HIDDEN_CLASSNAME);
    nameSubmit.addEventListener('submit', (e)=> {
        e.preventDefault();
        localStorage.setItem('username', nameInput.value);
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
