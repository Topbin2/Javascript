const input = document.querySelector("input");
const addBtn = document.querySelector("#add__button");
const list = document.querySelector("ul");
const removeBtn = document.querySelectorAll('.remove__button');

function clearInput() {
  input.value = '';
}

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value;
  const button = document.createElement("button");
  button.textContent = "X";
  li.appendChild(span);
  li.appendChild(button);
  list.appendChild(li);
  clearInput();
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = input.value;
    const button = document.createElement("button");
    button.textContent = "X";
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
    clearInput();
  }
});

removeBtn.forEach( btn => {
  btn.addEventListener('click', e => {
    console.log(e.target);
  })
})