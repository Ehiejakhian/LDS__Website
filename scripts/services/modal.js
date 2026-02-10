
// import '/scripts/jquery/jquery.js';

let modal = document.querySelector('.modal');
let m__open = document.querySelector('#open__modal');
let m__close = document.querySelectorAll('#close__modal');
let closed = true;

m__open.addEventListener('click', () => {
  closed = false;
  modal.classList.add('open');
})
m__close.forEach(elem => {
  elem.addEventListener('click', () => {
    closed = true;
    modal.classList.remove('open');
  })
})
