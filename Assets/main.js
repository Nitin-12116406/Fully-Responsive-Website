let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x");
let menu = document.querySelector(".navbar__menu");
openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
});
closeBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});