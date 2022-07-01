const icon = document.querySelector(".nav_ico img");
const menu = document.querySelector(".nav_item");
const text = document.querySelector("h1");
const number_skills = document.querySelectorAll(".skills_item h2");
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
//---------------Skill
number_skills.forEach((item) => {
      console.log(item.textContent);
});
