const input = document.querySelector("input");
const addBtn = document.querySelector("#add__button");
const list = document.querySelector("ul");
const removeBtn = document.querySelectorAll(".remove__button");

function onAdd() {
  const text = input.value;
  if (text.trim() === "") return;
  const item = createItem(text);
  list.appendChild(item);
  input.value = "";
  input.focus();
}

function createItem(text) {
  const container = document.createElement("li");
  container.innerHTML = `
  <span>${text}</span>
  <button class="remove__button">X</button>
  `;
  // const name = document.createElement("span");
  // const removeBtn = document.createElement("button");

  // name.textContent = text;
  // removeBtn.textContent = "X";
  // removeBtn.addEventListener('click', () => {
  //   container.remove();
  // })

  // container.appendChild(name);
  // container.appendChild(removeBtn);

  return container;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    onAdd();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    e.target.parentNode.remove();
  }
});
