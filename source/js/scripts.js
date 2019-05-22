var mainNav = document.querySelector(".main-nav");
var menuToggle = mainNav.querySelector(".main-nav__toggle");

function menuClose() {
  mainNav.classList.remove("main-nav--opened");
  mainNav.classList.add("main-nav--closed");
}

function menuOpen() {
  mainNav.classList.remove("main-nav--closed");
  mainNav.classList.add("main-nav--opened");
}

mainNav.classList.remove("main-nav--nojs");
menuClose();

menuToggle.addEventListener("click", function (){
  if (mainNav.classList.contains("main-nav--opened")) {
    menuClose();
  } else {
    menuOpen();
  }
});
