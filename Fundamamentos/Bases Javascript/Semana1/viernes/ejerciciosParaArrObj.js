/***************************************/
/* Ejercicios con arreglos y objetos: */
/**************************************/
// 1. Crear un objeto que contenga un arreglo de 5 nombres de personas.

// 2. Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.

// 3. Del arreglo anterior, crea un nuevo arreglo que contenga solo los nombres de las personas.

// 4. Declara una función que reciba un el mismo arreglo de objetos y que retorne la suma de todas las edades.

// 5. Del siguiente arreglo de objetos, realiza lo siguiente:
const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }
]

// 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.
const correos = []
console.log(correos)

// 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.
const cuentasDeFacebook = []
console.log(cuentasDeFacebook)
