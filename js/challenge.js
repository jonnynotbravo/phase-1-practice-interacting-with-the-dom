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
//console.log('ouch!');
})

function plusClick(){
    ticker.textContent = ++number;
};

const minus = document.querySelector('#minus');
    minus.addEventListener('click', (e) =>{
        minusClick();
        //console.log('touch!');
    });
function minusClick(){
        if (number >=1){
            ticker.textContent = --number
        }
}
const like = document.querySelector('#heart');

like.addEventListener('click', (e) =>{
    likeClick();
    //console.log('ouchie!');
});

function likeClick(){
    const ul = document.querySelector('#likes');
    const li = document.createElement('li');
    let counter = 0
    li.textContent = `${number} has been liked ${++counter} times`;
    
    console.log();
    ul.appendChild(li);
};
