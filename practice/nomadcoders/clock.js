const clock = document.querySelector("#clock");

const setDate = () => {
  const date = new Date("2022/12/25");

  const setDay = date.getDate();
  const setHour = date.getHours();
  const setMinute = date.getMinutes();
  const setSecond = date.getSeconds();

  const now = new Date();

  const distance = date.getTime() - now.getTime();

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString().padStart(2, '0');
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

setDate();
setInterval(setDate, 1000);

