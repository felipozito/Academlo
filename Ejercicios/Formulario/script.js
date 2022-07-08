const formulario = document.querySelector(".formulario");
let nombre;
formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e.target.name.value);
      console.log(e.target.surname.value);
      console.log(e.target.email.value);
});
console.log(nombre);
document.addEventListener("click", (e) => {
      console.log(e.target);
});
