const menu = document.querySelector('.main-nav__list');
const openButton = document.querySelector('.main-header__item-button-open');

menu.classList.remove('main-nav__list--nojs');
openButton.classList.remove('main-header__item-button-open--nojs');

function openMenu () {
  menu.classList.toggle('main-nav__list--closed');
  openButton.classList.toggle('main-header__item-button-close');
}

openButton.addEventListener('click', openMenu);
