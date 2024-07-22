//hamburger

const hamburger = document.querySelector('#hamburger');
const menuMobile = document.querySelector('.menu-mobile');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  menuMobile.classList.toggle('hidden');
});
