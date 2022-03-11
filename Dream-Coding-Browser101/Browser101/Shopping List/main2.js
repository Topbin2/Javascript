const input = document.querySelector('.footer-input');
const plustBtn = document.querySelector('.plus');
const list = document.querySelector('.main');





function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    const item  = createItem(text);
    list.appendChild(item);
    item.scrollIntoView({behavior:"smooth", block: "center"});
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemLi = document.createElement('li');
    let id = 0;

    itemLi.setAttribute('class', 'main-text');
    itemLi.innerHTML = `
            <div class="text-item" data-id=${id}>
              <span class="item-name">${text}</span>
              <button class="item-delete">
                <i class="fa-solid fa-trash-can" data-id=${id}></i>
              </button>
            </div>
            <div class="item-divider"></div>`;
    
    id++;
    return itemLi;
}

plustBtn.addEventListener('click', onAdd);

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    }
})


list.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector()
    }
})
