const toggleColors = document.getElementById("toggle-colors");
const rootStyle = document.documentElement.style;
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

toggleColors.addEventListener("click", (e) => {
      rootStyle.setProperty("--main-color", e.target.dataset.color);
      //   localStorage.setItem("Portfolio-Color", e.target.dataset.color);
});

window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 0);
});

menu.addEventListener("click", () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
});
window.onscroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
};
