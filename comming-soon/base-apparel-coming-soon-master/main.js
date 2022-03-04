const input= document.querySelector('#email');
const btn = document.querySelector('#submit');
const textError = document.querySelector('.text-error');
const iconError = document.querySelector('.icon-error');
const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

btn.addEventListener('click', (e)=> {
    let email = input.value;

    e.preventDefault();

    if (!email.match(regEmail)) {
        textError.innerText = 'Check your Email';
        iconError.style.display = 'block';
    } else if (email.match(regEmail)) {
        textError.innerText ='Thank you';
        iconError.style.display = 'none';
    }

    if (email =='') {
        textError.innerText = 'Check your Email';
        iconError.style.display = 'block';
    }
})