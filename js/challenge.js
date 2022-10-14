//code 

const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{

    e.preventDefault();

    createComment(e.target['comment-input'].value);


})

function createComment(value){

    const comment = document.createElement('p');

    comment.textContent = value;

    form.appendChild(comment);

    
}

