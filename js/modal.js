var popup = document.querySelector(".modal-add-cart");
var overlay = document.querySelector(".modal-overlay");

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
