'use strict';

const buttonOn = document.querySelector('.icon-on');
const buttonOff = document.querySelector('.icon-off');
const footerOn = document.querySelector(".main-footer-on");
const footerOff = document.querySelector('.main-footer-off');

buttonOn.addEventListener('click', () => {
    if (window.innerWidth < 700) {
    footerOn.style.display = 'none';
    footerOff.style.display = 'flex';
    }
})

buttonOff.addEventListener('click', ()=> {
    if (window.innerWidth < 700) {
    footerOff.style.display = 'none';
    footerOn.style.display = 'flex';
    }
})
