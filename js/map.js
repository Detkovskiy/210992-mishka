ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.9363, 30.3212],
        zoom: 16,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([59.9363, 30.3202] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'img/icon-map-pin.svg',
          iconImageSize: [230, 146],
          iconImageOffset: [-45, -147] });

    myMap.geoObjects.add(myPlacemark);

}

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var userMenu = document.querySelector('.user-menu');
var formSearch = document.querySelector('.form-search');
var searchToggle = document.querySelector('.user-menu__link--search');
var link = document.querySelector(".btn");
var popup = document.querySelector(".modal-add-cart");
var overlay = document.querySelector(".modal-overlay");

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

link.addEventListener("click", function() {
  popup.classList.add("modal-add-cart-show");
  overlay.classList.add("modal-overlay-show");
});

function buy() {
  if (popup.classList.contains("modal-add-cart-show")) {
      popup.classList.remove("modal-add-cart-show");}
  if (overlay.classList.contains("modal-overlay-show")) {
      overlay.classList.remove("modal-overlay-show");
}}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    buy();
    }
});
