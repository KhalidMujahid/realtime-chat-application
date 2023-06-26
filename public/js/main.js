<<<<<<< HEAD
// eslint-disable-next-line no-undef
const socket = io();

console.log(socket);
=======
const socket = io();
const button = document.querySelector('.toggle');
const body = document.querySelector('body')
button.addEventListener('click', e => {
  e.preventDefault();
  body.classList.toggle('dark-mode');
});
>>>>>>> 10102455c102c4924c6c8644c4782267f952385a
