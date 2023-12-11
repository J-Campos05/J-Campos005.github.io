const $ = q => document.querySelector(q);

let form = $('#post');
let comments = $('#comments');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let text = form.elements.msg.value;
    let div = document.createElement('div');
        div.className = 'cmd';
    let span = newComment(text);
        span.style = 'font-size: 16x;'
    let br = document.createElement('br');
    
    
    div.appendChild(span);
    div.appendChild(br);
    
    comments.appendChild(div);
    form.reset();
});

function newComment(text) {
    let span = document.createElement('span');
    span.innerText = text;
    
    return span;
}