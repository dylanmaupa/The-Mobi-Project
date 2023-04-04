const hamburger = document.querySelector(".menu");
const nav = document.querySelector(".nav");

hamburger.onclick = function () {
  nav.classList.toggle("navActive")
};
console.log(nav)