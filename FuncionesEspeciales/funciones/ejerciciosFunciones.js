/******************************/
/* Ejercicios con Funciones: */
/*****************************/
/*
Ejercicio 1:
1. Si las funciones son tratadas como cualquier otra variable en JavaScript, ¿cómo se les conoce a las funciones?


2. Las funciones que llaman a otras funciones o que devuelven funciones ¿Son llamadas?.


3. ¿cómo se le llama a una función que pasamos como argumento a otra función?


4. ¿cómo se le conoce a una función que se llama así misma para realizar algún tipo de tarea?

*/

/*
Ejercicio 2:
1. Declarar una función que muestre por consola un "hola mundo"
2. Asignalo a una nueva variable
3. Llama a la función con el nombre de la variable. (No olvides ponerle paréntesis)
*/

/*
Ejercicio 3:
1. Crea una variable usando let sin asignarle ningún valor.
2. Crea una constante que almacene el resultado de una condición, puedes usar true o false.
3. Crea una sentencia if/else que asigne una función a la variable dependiendo de la condición.
4. Si la condición es true la función deberá retor un mensaje: 'La condición es verdadera'
5. Si la condición es false la función deberá retor un mensaje: 'La condición es falsa'
6. Llamar a la función. (No olvides el paréntesis)
*/

/*
Ejercicio 4:
Declara una función para sumar los números naturales hasta N (se lo damos nosotros) de forma recursiva.
*/

/*
Ejercicio 5:
*/

/*
1) Crear una función que use el ciclo for para recorrer todos los elementos de un arreglo y ejecute una función(callback) por cada uno de los elementos, cada vez que el callback se ejecute recibirá como parámetro el elemento en la posición i y este podrá ser utilizado en el callback.
*/

/*
2) Crear una función que use el ciclo for para recorrer todos los elementos de un arreglo y ejecute una función (callback)
  para cada uno de los elementos, cada vez que el callback se ejecute recibirá como parámetro el elemento en la posición i 
  y retornará el elemento si cumple con una condición especificada en el callback, en caso contrario retornara un arreglo vacio, 
  algunos ejemplos pueden ser:
  - Tenemos el arreglo [2, 3, 4], y la condición del callback será que el elemento que recibe sea igual a 3, al ejecutar el callback para cada elemento este retornará [ 3 ]
  - Tenemos el arreglo de usuarios la condición del callback será que el usuario tenga correo de academlo, por lo cual al ejecutar el callback por cada elemento de array (que sería cada usuario) lo que este retornará será `true, true, false, true, false`
Finalmente nuestra función principal devolverá en un arreglo nuevo todos los elementos para los cuales el callback haya devuelto true
*/

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
        edad: 29,
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
        correo: "daniela@uaq.mx",
        social: [
            { nombre: "facebook", url: "facebook/andrea" },
            { nombre: "twitter", url: "twitter/andrea" },
        ],
        genero: "Mujer",
    },
];

/*
3) Crear una función que use el ciclo `for` para recorrer todos los elementos de un arreglo y ejecute una función (callback) por cada elemento **hasta** que encuentre un elemento que cumpla con una condición provista por el callback, cuando un elemento cumpla con la condición nuestra función principal retornara el elemento que cumplió con la condición, por ejemplo:
  - Tenemos el arreglo `[2, 3, 4]`, y la condición del callback será que el elemento que recibe sea igual a 3, al ejecutar el callback para cada elemento la función principal retornará 3, ya que es el primer elemento que cumple la condición.
  - Tenemos el arreglo de usuarios y la condición del callback será que el usuario tenga correo de academlo, por lo cual al ejecutar el callback por cada elemento de array (que sería cada usuario) lo que este retornará será lo siguiente, ya que es el primer elemento que cumple con la condición
*/

/*
Ejercicio 6:
Pasa las siguientes funciones delcaradas a funciones expresadas de flecha.
*/

function sumar(a, b) {
    return a + b;
}

function permiso(edad) {
    if (edad >= 18) {
        return "Puedes pasar";
    } else {
        return "No puedes pasar";
    }
}
