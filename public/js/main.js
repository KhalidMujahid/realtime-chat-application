const socket = io();
const button = document.querySelector('.toggle');
const body = document.querySelector('body')
button.addEventListener('click', e => {
  e.preventDefault();
  body.classList.toggle('dark-mode');
});
