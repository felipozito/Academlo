import { data } from "./data";
iconTheme = document.querySelectorAll(".navbar_items i");
navbar = document.querySelector(".navbar");
navbar_list = document.querySelector(".navbar_label");
shoppingCart = document.querySelector(".shopping_cart");

console.log(data);
window.addEventListener("click", (e) => {
      const event = e.target.classList.value;
      const type = e.target.dataset.type;
      console.log(type);
      if (event.includes("bx bx-moon") || event.includes("bx bx-sun")) {
            darkmode(event);
      }
      if (event.includes("bx bx-cart")) {
            openCart();
      }
      if (event.includes("shopping_close")) {
            closeCart();
      }
      if (event.includes("bx bx-menu")) {
            showMenu();
      }
});

window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
            navbar.classList.remove("sticky");
      } else {
            navbar.classList.add("sticky");
      }
});
function darkmode(event) {
      if (event.includes("bx bx-moon")) {
            iconTheme[1].classList.replace("bx-moon", "bx-sun");
            document.body.classList.add("darkMode");
      } else {
            iconTheme[1].classList.replace("bx-sun", "bx-moon");
            document.body.classList.remove("darkMode");
      }
}
function openCart() {
      document.querySelector(".shopping_cart").classList.add("open_cart");
}
function closeCart() {
      document.querySelector(".shopping_cart").classList.remove("open_cart");
}
function showMenu() {
      navbar_list.classList.toggle("show_nav");
      if (navbar_list.classList.value.includes("show_nav")) {
            navbar.classList.add("sticky");
      } else {
            navbar.classList.remove("sticky");
      }
}
function filterItems() {
      console.log(item);
}
