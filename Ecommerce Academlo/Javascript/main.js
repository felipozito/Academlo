iconTheme = document.querySelectorAll(".navbar_items i");
shoppingCart = document.querySelector(".shopping_cart");

window.addEventListener("click", (e) => {
      const event = e.target.classList.value;
      if (event.includes("bx bx-moon") || event.includes("bx bx-sun")) {
            darkmode(event);
      }
      if (event.includes("bx bx-cart")) {
            openCart();
      }
      if (event.includes("shopping_close")) {
            closeCart();
      }
});

function darkmode(event) {
      if (event.includes("bx bx-moon")) {
            console.log(document.body);
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
