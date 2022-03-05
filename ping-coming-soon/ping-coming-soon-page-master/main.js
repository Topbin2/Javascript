'use strict';

const inputEmail = document.querySelector('#email');
const submit = document.querySelector('#submit');
const form = document.querySelector('.form-group');
const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    const value = inputEmail.value;
    if (!value.match(regExp)) {
        addErrorText();
    }
})

function addErrorText() {
    const errorText = document.createElement('p');
    errorText.classList.add('error-text');
    errorText.innerText = 'Please provide a valid email address'
    form.appendChild(errorText);
}

