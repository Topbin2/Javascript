const input= document.querySelector('#email');
const btn = document.querySelector('#submit');
const textError = document.querySelector('.text-error');
const iconError = document.querySelector('.icon-error');
const RegEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

// btn.addEventListener('click', (e)=> {
//     let email = input.value;

//     e.preventDefault();

//     if (!email.match(regEmail)) {
//         textError.innerText = 'Check your Email';
//         iconError.style.display = 'block';
//     } else if (email.match(regEmail)) {
//         textError.innerText ='Thank you';
//         iconError.style.display = 'none';
//     }

//     if (email =='') {
//         textError.innerText = 'Check your Email';
//         iconError.style.display = 'block';
//     }
// })

btn.addEventListener('click', e => {

    let errors = [];

    e.preventDefault();

    const email = input.value;
  
    if (email == '' || email === undefined) {
      errors.push('Please provide us your email');
      iconError.style.display = 'block';
      textError.innerText = errors[0];
    } else if (!email.match(RegEmail)) {
      errors.push('Please provide us your valid email');
      iconError.style.display = 'block';
      textError.innerText = errors[0];
    }
  
    if (!errors.length > 0) {
      iconError.style.display = 'none';
      textError.innerText = 'Thank you for subscribing to our newsletter.';
    }
  });
