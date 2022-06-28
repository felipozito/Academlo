// 1. Crea un arreglo con los números del 1 al 400
function fillArray(numberTop) {
    const numbers = [];

    for (let i = 1; i <= numberTop; i++) {
        numbers.push(i);
    }

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    return numbers;
}

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
// input 1, 6
// output [1,2,3,4,5,6]
function arrayRange(start, end) {
    const array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
// let numbersSum = [1, 2, 3, 4, 5];

function sumArray(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += numbersSum[i];
    }

    return suma;
}

// crea una funcion que reciba por parametro un array y retorne un array sin valores repetidos
function noRepeatNumber(array) {
    let auxNumber = [];

    for (const i of array) {
        if (!auxNumber.includes(i)) {
            auxNumber.push(i);
        }
    }

    return auxNumber;
}

// 4. input [1, 3, 4] output 3
// input  [1, 3, 4, 5, 5, 3] output  [4, 5]

function middle(arrayNumbers) {
    let len = arrayNumbers.length;
    const auxArray = [];

    if (len % 2 === 0) {
        let segundo = len / 2;
        let primero = len / 2 - 1;

        auxArray.push(arrayNumbers[primero]);
        auxArray.push(arrayNumbers[segundo]);
        return auxArray;
    } else {
        return arrayNumbers[Math.trunc(len / 2)];
    }
}

//5.
const usuarios = [
    {
        nombre: "Erik",
        edad: 29,
        correo: "erik@academlo.com",
        social: [
            { nombre: "twitter", url: "twitter/erik" },
            { nombre: "youtube", url: "youtube/erik" },
            { nombre: "facebook", url: "facebook/erik" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Georg",
        edad: 33,
        correo: "georg@academlo.com",
        social: [
            { nombre: "instagram", url: "instagram/georg" },
            { nombre: "twitter", url: "twitter/georg" },
            { nombre: "youtube", url: "youtube/georg" },
            { nombre: "facebook", url: "facebook/georg" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Andrea",
        edad: 42,
        correo: "andrea@hotmail.com",
        social: [
            { nombre: "twitter", url: "twitter/andrea" },
            { nombre: "facebook", url: "facebook/andrea" },
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

// 5.1. Almacena todos los correos del arreglo usuarios.
const allEmails = function (array) {
    const emails = [];

    for (let i = 0; i < array.length; i++) {
        emails.push(array[i].correo);
    }

    return emails;
};

// 5.2. Almacena todas las urls de las cuentas de facebook del arreglo usuarios.
const allUrlFacebook = function (array) {
    const urls = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].social.length; j++) {
            array[i].social[j].url.includes("facebook")
                ? urls.push(array[i].social[j].url)
                : null;
        }
    }

    return urls;
};

const allUrl = function (array) {
    const urls = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].social.length; j++) {
            urls.push(array[i].social[j].url);
        }
    }

    return urls;
};

// const arrayNumbers = [
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ],
//     [
//         [10, 11, 12],
//         [13, 14, 14],
//         [17, 17, 18, 19],
//     ],
// ];

// for (let i = 0; i < arrayNumbers.length; i++) {
//     for (let j = 0; j < arrayNumbers[i].length; j++) {
//         for (let k = 0; k < arrayNumbers[i][j].length; k++) {
//             console.log(arrayNumbers[i][j][k]);
//         }
//     }
// }
