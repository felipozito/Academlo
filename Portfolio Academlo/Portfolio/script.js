const icon = document.querySelector(".nav_ico img");
const menu = document.querySelector(".nav_item");
const text = document.querySelector("h1");
const number_skills = document.querySelectorAll(".skills_item h2");
const about_img = document.querySelectorAll(".logo");
const thema = document.querySelector(".bx");
//------------navbar
icon.addEventListener("click", () => {
      menu.classList.toggle("active");
});
window.addEventListener("scroll", () => {
      menu.classList.remove("active");
});
//------------Effect type
const str = text.innerHTML;
text.innerHTML = " ";
let i = 0;

function typing() {
      if (i < str.length) {
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typing, 200);
      }
}
setTimeout(typing, 200);
//----------------Nosotros-----------------
//-----------------------Animaciones Scroll--------------------
console.log(about_img);
window.addEventListener("scroll", () => {
      //   console.log(about_img[0].getBoundingClientRect().top);
      about_img.forEach((item) => {
            if (580 > item.getBoundingClientRect().top) {
                  item.classList.add("show");
            } else if (660 < item.getBoundingClientRect().top) {
                  item.classList.remove("show");
            }
      });
});

// //---------------Skill
// number_skills.forEach((item) => {
//       console.log(item.textContent);
// });
