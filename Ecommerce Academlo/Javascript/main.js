const iconTheme = document.querySelectorAll(".navbar_items i");
const navbar = document.querySelector(".navbar");
const navbar_list = document.querySelector(".navbar_label");
const shoppingCart = document.querySelector(".shopping_cart");
let mylist = [];

window.addEventListener("click", (e) => {
      const event = e.target.classList.value;
      const type = e.target.dataset.type;
      const item_id = e.target.parentNode.dataset.item;
      console.log(item_id);
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
      if (type) {
            filterType(type, products);
      }
      if (item_id) {
            addCart(item_id, e.target.parentNode);
      }
});

function addCart(id, event) {
      const items = document.querySelector(".car_number");
      let count = 0;
      const info_item = {
            id: event.getAttribute("data-item"),
            name: event.querySelector(".card_text > h2").textContent,
            price: event.querySelector(".card_title h2").textContent.replace(" $", ""),
            img: event.querySelector(".card_img img").getAttribute("src"),
            unit: 1,
      };
      if (mylist.some((item) => item.id == id)) {
            const update_product = mylist.map((item) => {
                  if (item.id == id) {
                        item.unit++;
                        return item;
                  } else {
                        return item;
                  }
            });
            mylist = [...update_product];
      } else {
            mylist = [...mylist, info_item];
      }
      mylist.forEach((item) => (count += item.unit));
      items.textContent = count;
      //   console.log(mylist);
}
function printCart(list) {
      const content = document.querySelector(".main_cart");
      let html = "";
      let empty = `
            <img src="./Assets/empty-cart.png" alt="">
            <p>Your cart is empty
                You can add items to your cart by clicking on the "" button on the product page.</p>
            `;
      if (list.length === 0) {
            innerHTML = empty;
      }
      list.forEach((item, index) => {
            html += `
            
      `;
      });
      //   console.log(html);
      content.innerHTML = html;
}
// printCart();

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
//---------------------------------------Carrito------------------------------------------

const products = [
      { id: 1, name: "Hoddies", price: 35, stock: 20, collection: 2022, state: "free", type: "hoodies", img: "./Assets/hoddie.png" },
      { id: 2, name: "Shirts", price: 20, stock: 15, collection: 2022, state: "free", type: "shirts", img: "./Assets/hoddie1.png" },
      { id: 3, name: "Sweartshirt", price: 40, stock: 18, collection: 2022, state: "free", type: "sweatshirt", img: "./Assets/hoddie2.png" },
];
function AllProducts(products) {
      const content_products = document.querySelector(".products_list");
      let html = "";
      products.forEach((item, index) => {
            html += `
      <div class="card_product" data-item=${item.id}>
            <div class="card_img">
                <img src="${item.img}"  alt="${index}">
            </div>
            <div class="card_text">
                <div class="card_title">
                    <h2>${item.price} $</h2>
                    <p>| Stock: ${item.stock}</p>
                </div>
                <h2>${item.name}</h2>
            </div>
            <div class="card_btn">+</div>
      </div>
      `;
      });
      //   console.log(html);
      content_products.innerHTML = html;
}
AllProducts(products);

function filterType(type, products) {
      const content_products = document.querySelector(".products_list");
      let html = "";
      content_products.innerHTML = html;
      let products_filter = products.filter((item) => item.type == type);
      if (type == "all") products_filter = products;
      products_filter.forEach((item, index) => {
            html += `
      <div class="card_product" data-item=${item.id}>
            <div class="card_img">
                <img src="${item.img}"  alt="${index}">
            </div>
            <div class="card_text">
                <div class="card_title">
                    <h2>${item.price} $</h2>
                    <p>| Stock: ${item.stock}</p>
                </div>
                <h2>${item.name}</h2>
            </div>
            <div class="card_btn">+</div>
      </div>
      `;
      });
      //   console.log(html);
      content_products.innerHTML = html;
}
