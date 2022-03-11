'use strict';


const questions = document.querySelectorAll('.question-answer__accordion'); 

questions.forEach((question) => 
    question.addEventListener ("click", () => { 
        question.classList.toggle('active');
    })
)