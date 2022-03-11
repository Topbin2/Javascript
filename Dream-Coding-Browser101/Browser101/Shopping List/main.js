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
    itemLi.setAttribute('class', 'main-text');

    const textItem = document.createElement('div');
    textItem.setAttribute('class', 'text-item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item-name');
    itemName.innerText = text;

    const itemDelete= document.createElement('button');
    itemDelete.setAttribute('class', 'item-delete');
    itemDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    itemDelete.addEventListener('click', () => {
        list.removeChild(itemLi);
    })

    const divider = document.createElement('div');
    divider.setAttribute('class', 'item-divider');

    textItem.appendChild(itemName);
    textItem.appendChild(itemDelete);

    itemLi.appendChild(textItem);
    itemLi.appendChild(divider);

    return itemLi;
}

plustBtn.addEventListener('click', onAdd);

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    }
})

