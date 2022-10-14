//code 

const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    createComment(e.target['comment-input'].value);
    form.reset();
})

function createComment(value){
    const comment = document.createElement('p');
    comment.textContent = value;
    form.appendChild(comment);    
}

const ticker = document.querySelector('#counter');

let number = Number(ticker.textContent);

const plus = document.querySelector('#plus');

plus.addEventListener('click', (e) =>{
plusClick();
console.log('ouch!');
})

function plusClick(){
   ticker.textContent = ++number;
};