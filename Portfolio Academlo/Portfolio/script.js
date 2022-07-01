const icon = document.querySelector(".nav_ico img");
const menu = document.querySelector(".nav_item");
icon.addEventListener("click", () => {
      menu.classList.toggle("active");
});
window.addEventListener("scroll", () => {
      menu.classList.remove("active");
});
