const toggleColors = document.getElementById("toggle-colors");
const rootStyle = document.documentElement.style;
const header = document.querySelector("header");
const text = document.querySelector(".name");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const experience = [
      {
            company: "Fundacion Scorpius",
            job: "Help Desk",
            task: [
                  "Gestión De Cms y administración de sitio web.",
                  "Recepción y solución de problemas networking.",
                  "Manejo de caja chica.",
                  "Atención a clientes.",
                  "Procesos de mantenimiento, respaldo de servidores.",
                  "Mantenimiento y actualización de laptops y computadoras.",
            ],
            start: "Marzo 2020",
            end: "Marzo 2021",
      },
      {
            company: "CINNET",
            job: "Ingeniero de Planta",
            task: [
                  "Actualización de planos en AutoCAD del cableado eléctrico,cableado de red, accesos, seguridades y sistema contra incendios en bloque B del Instituto Tecnológico Superior YAVIRAC.",
                  "Control de calidad e Inspeccion de cableado de accesos y seguridades en talleres, Cableado del sistema contra  incendios, cableado de puntos de voz y datos en sala de profesores",
                  "Planificación y ejecucion de instalación de infraestructura de puntos de Datos.",
            ],
            start: "Marzo 2020",
            end: "Junio 2021",
      },
      {
            company: "Tecnologia para Llevar",
            job: "Administrador",
            task: [
                  "Servicio de help desk.",
                  "Recepción y solución de problemas networking.",
                  "Soporte en software y mantenimiento de Laptops y Computadores.",
                  "Control de salida e ingreso de mercaderia.",
                  "Uso y planificación con Kardex.",
                  "Administración de Local y atención al cliente.",
            ],
            start: "Junio 2020",
            end: "Septiembre 2021",
      },
      {
            company: "JassaTelecom",
            job: "Jefe Tecnico",
            task: [
                  "Análisis y Diseño de red Gpon.",
                  "Control y Análisis del personal de Campo para el levantamiento de la red de fibra óptica.",
                  "Dibujante de los planos de la red de Fibra.",
                  "Control de salida e ingreso de mercaderia.",
                  "Gestionar el Rediseño de la red.",
                  "Administracion de bodega.",
            ],
            start: "Septiembre 2020",
            end: "Enero 2021",
      },
      {
            company: "TurnKey Resource",
            job: "Analista",
            task: [
                  "Análisis y Diseño de red Gpon.",
                  "Control y Análisis del personal de Campo para el levantamiento de la red de fibra óptica.",
                  "Dibujante de los planos de la red de Fibra.",
                  "Control de salida e ingreso de mercaderia.",
                  "Gestionar el Rediseño de la red.",
                  "Administracion de bodega.",
            ],
            start: "Junio 2020",
            end: "Actual",
      },
];

window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
};
window.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.value.includes("bx bxs-moon") || e.target.classList.value.includes("bx bxs-sun")) {
            darkmode(e.target.classList.value);
      }
      if (e.target.dataset.color) {
            rootStyle.setProperty("--main-color", e.target.dataset.color);
            localStorage.setItem("Portfolio-Color", e.target.dataset.color);
      }
      if (e.target.id.includes("menu-icon")) {
            openNavbar();
      }
      if (e.target.dataset.id) {
            const id = e.target.dataset.id;
            if (id == "Resumen") {
                  resumen();
            }
            if (id == "Experiencia") {
                  experiencia();
            }
            if (id == "Educacion") {
                  educacion();
            }
      }
});
//--------------------------Darkmode----------
function darkmode(event) {
      const iconTheme = document.querySelector("header i");
      if (event.includes("bx bxs-moon")) {
            iconTheme.classList.replace("bxs-moon", "bxs-sun");
            document.body.classList.remove("darkMode");
            localStorage.setItem("theme", "darkMode");
      } else {
            iconTheme.classList.replace("bxs-sun", "bxs-moon");
            document.body.classList.add("darkMode");
            localStorage.removeItem("theme");
      }
}
//-----------------------OpenNavbar------------
function openNavbar() {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
}
//?----------------------home-------------------
// ------------Effect type
let i = 0;
const str = text.innerHTML;
text.innerHTML = " ";
function typingName() {
      if (i < str.length) {
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typingName, 300);
      }
}
setTimeout(typingName, 200);

//*---------------------- About-------------------*//
function resumen() {
      console.log("Resumen");
      let text =
            "I am a Front-End web DEveloper, I can provide clean code and pixel perfect design. I also make the website more & more intereactive with web animation. I can provide clean code and pixel perdect design. I also maje the website more & more interactive with web animations. A responsive desgin makes your website accesible to all users, regardless of their device.";
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      const content = document.querySelector(".topic");
      content.innerHTML = "";
      content.appendChild(paragraph);
}
function experiencia() {
      console.log("Experiencia");
      const content = document.querySelector(".topic");
      let job = "";
      content.innerHTML = "";
      experience.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card_topic");
            let title = document.createElement("h4");
            title.textContent = item.company;
            let years = document.createElement("span");
            years.textContent = `${item.start} - ${item.end}`;
            let description = document.createElement("ol");
            item.task.forEach((activity) => {
                  let li = document.createElement("li");
                  li.textContent = activity;
                  description.appendChild(li);
                  console.log(activity);
            });
            card.appendChild(title);
            card.appendChild(years);
            card.appendChild(description);
            content.appendChild(card);
      });
}
function educacion() {
      console.log("Educacion");
}
