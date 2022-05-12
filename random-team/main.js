const button = document.querySelector(".shuffle-btn");
const container = document.querySelector(".text-container");

const members = [
  "모상빈",
  "김기욱",
  "이혜진",
  "이동기",
  "김현수",
  "박수연",
  "송슬기",
  "정혜선",
  "지영준",
];

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));
    const temporary = array[index];
    array[index] = array[randomPosition];
    array[randomPosition] = temporary;
  }
}

button.addEventListener("click", () => {
  shuffle(members);

  container.innerHTML = `
    <p>
      <span>PAIR1</span> - <span class='name'>${members[0]}</span>님,
      <span class='name'>${members[1]}</span>님
    </p>
    <p>
      <span>PAIR2</span> - <span class='name'>${members[2]}</span>님,
      <span class='name'>${members[3]}</span>님
    </p>
    <p>
      <span>PAIR3</span> - <span class='name'>${members[4]}</span>님,
      <span class='name'>${members[5]}</span>님
    </p>
    <p>
      <span>PAIR4</span> - <span class='name'>${members[6]}</span>님,
      <span class='name'>${members[7]}</span>님, 
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='name'>
      ${members[8]}</span>님
    </p>
  `;
});
