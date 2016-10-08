var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var userMenu = document.querySelector('.user-menu');
var formSearch = document.querySelector('.form-search');
var searchToggle = document.querySelector('.user-menu__link--search');
var link = document.querySelector(".btn");

function changeMenuClass(menuClass, closeSelector, openSelector){
  if (menuClass.classList.contains(closeSelector)) {
    menuClass.classList.remove(closeSelector);
    menuClass.classList.add(openSelector);
  } else {
    menuClass.classList.add(closeSelector);
    menuClass.classList.remove(openSelector);
  }
}

navMain.classList.remove('main-nav--nojs');
userMenu.classList.remove('user-menu--nojs');

navToggle.addEventListener('click', function() {
  changeMenuClass(navMain, 'main-nav--closed', 'main-nav--opened')
  changeMenuClass(userMenu, 'user-menu--closed', 'user-menu--opened')
});

searchToggle.addEventListener('click', function() {
  changeMenuClass(formSearch, 'form-search--closed', 'form-search--opened')
});
