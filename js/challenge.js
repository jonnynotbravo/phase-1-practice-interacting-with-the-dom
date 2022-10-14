// Declare variables
const form = document.querySelector('form');
const ticker = document.querySelector('#counter');
let number = Number(ticker.textContent);
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const like = document.querySelector('#heart');
const ul = document.querySelector('.likes');
const list = document.querySelector('#list');


form.addEventListener('submit', (e) =>{
    
    e.preventDefault();
    createComment(e.target['comment-input'].value);
    form.reset();

})

function createComment(value){
    
    const comment = document.createElement('p');
    comment.textContent = value;
    list.appendChild(comment);    

}

plus.addEventListener('click', (e) =>{
    
    plusClick();

})

function plusClick(){
    
    ticker.textContent = ++number;

};

minus.addEventListener('click', (e) =>{
       
    minusClick();
        
});

function minusClick(){
    
    ticker.textContent = --number

}


like.addEventListener('click', (e) =>{
    
    likeClick();
    
});

function likeClick(){

    let counter = 1;
    
    const li = document.createElement('li');
    const str = `${number} is liked ${counter} time`;

    li.append(str);
    ul.append(li);

};


