// 1. Crear un objeto que contenga un arrreglo de 5 nombre
const objUser = {
      user: ["user1", "user2", "user3", "user4", "user5"],
};
// 2. Crea un arreglo de 5 objetos  conn nombre y edad
const users = [
      { name: "Felipe", age: 21 },
      { name: "Juan", age: 22 },
      { name: "Pedro", age: 25 },
      { name: "Liz", age: 20 },
      { name: "Michael", age: 21 },
];
// 3. Del arregloanterio crea un nuevo arreglo que tenga solo nombre
const onlyName = users.map((item) => item.name);
// 4. Declara una funcion que recibe el mismo arreglo de objetos y retorna la suna de todas las edades
function totalAge(array) {
      let total = 0;
      users.forEach((item) => {
            total += item.age;
      });
      return total;
}
// 5. Del siguiente arreglo de objetos, realiza lo siguiente:
const usuarios = [
      {
            nombre: "Erik",
            edad: 29,
            correo: "erik@academlo.com",
            social: [
                  { nombre: "facebook", url: "facebook/erik" },
                  { nombre: "twitter", url: "twitter/erik" },
            ],
            genero: "Hombre",
      },
      {
            nombre: "Georg",
            edad: 33,
            correo: "georg@academlo.com",
            social: [
                  { nombre: "facebook", url: "facebook/georg" },
                  { nombre: "twitter", url: "twitter/georg" },
            ],
            genero: "Hombre",
      },
      {
            nombre: "Andrea",
            edad: 42,
            correo: "andrea@hotmail.com",
            social: [
                  { nombre: "facebook", url: "facebook/andrea" },
                  { nombre: "twitter", url: "twitter/andrea" },
            ],
            genero: "Mujer",
      },
      {
            nombre: "Oscar",
            edad: 31,
            correo: "oscar@academlo.com",
            social: [
                  { nombre: "facebook", url: "facebook/oscar" },
                  { nombre: "twitter", url: "twiter/oscar" },
            ],
            genero: "Hombre",
      },
      {
            nombre: "Daniela",
            edad: 22,
            correo: "andrea@uaq.mx",
            social: [
                  { nombre: "facebook", url: "facebook/andrea" },
                  { nombre: "twitter", url: "twitter/andrea" },
            ],
            genero: "Mujer",
      },
];

// 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.
const correos = [];

// 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.

function allAcountsFacebook(array) {
      let ans = [];
      for (const i of array) {
            for (const j of i.social) {
                  if (j.nombre === "facebook") {
                        //ans.push(j.url);
                        ans = [...ans, j.url];
                  }
            }
      }
      return ans;
}

allAcountsFacebook(usuarios);
