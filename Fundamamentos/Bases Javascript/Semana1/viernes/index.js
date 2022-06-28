// todo 1
// input "hola-esto-es-un-string"
// output "holaEstoEsUnString"

// function camelCase(str) {
//     let separator = str.split("-");
//     let auxStr = "";

//     for (let i = 0; i < separator.length; i++) {
//         if (i !== 0) {
//             let aux1 = separator[i].toLowerCase();
//             let aux2 = separator[i][0].toUpperCase() + aux1.slice(1);
//             auxStr += aux2;
//         } else {
//             auxStr += separator[i];
//         }
//     }

//     return auxStr;
// }

const phrase = "hola-esto-es-un-string";

function camelCase(str) {
    let separator = str.split("-");
    let auxStr = separator[0];

    for (let i = 1; i < separator.length; i++) {
        auxStr += separator[i][0].toUpperCase() + separator[i].slice(1);
    }

    return auxStr;
}

// todo 2
// mayor a menor segun la edad
const people = [
    { name: "vladimir", age: 1 },
    { name: "Pablo", age: 29 },
    { name: "Andres", age: 55 },
    { name: "Carlos", age: 2 },
    { name: "Juan", age: 13 },
];

function sortArrayMajorToMinor(array) {
    return array.sort(function (a, b) {
        if (a.age < b.age) {
            return -1;
        }

        if (a.age > b.age) {
            return 1;
        }

        return 0;
    });
}

// todo 3

const vocales = ["i", "e", "o", "u", "a"];

function orderVocales(params) {
    const auxArray = params.slice();
    return { orginal: params, copy_order: auxArray.sort() };
}

// todo 4
const nombres = [
    "Wladimir",
    "Pablo",
    "Andres",
    "Carlos",
    "Juan",
    "Wladimir",
    "Pablo",
    "Andres",
    "Carlos",
];

function namesNoRepeat(array) {
    let noRepeat = [];

    for (let i = 0; i < array.length; i++) {
        console.log();
        if (!noRepeat.includes(array[i])) {
            noRepeat.push(array[i]);
        }
    }

    return noRepeat;
}

// todo 5

const arreglo1 = [1, 2, 3, 10];
const arreglo2 = [4, 5, 6, 7, 2];

function sumArray(array1Change, array2Change) {
    let sum = 0;

    for (let i = 0; i < array1Change.length; i++) {
        sum += array1Change[i];
    }

    for (let j = 0; j < array2Change.length; j++) {
        sum += array2Change[j];
    }

    return sum;
}

const arrayBi = [
    [
        [1, 2],
        [2, 3],
        [3, 4],
    ],
    [
        [1, 2],
        [2, 3],
        [3, 4],
    ],
    [
        [1, 2],
        [2, 3],
        [3, 4],
    ],
];

function sumArrayBi(params) {
    let sum = 0;

    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params[i].length; j++) {
            for (let k = 0; k < params[i][j].length; k++) {
                sum += params[i][j][k];
            }
        }
    }

    return sum;
}

const people2 = [
    { name: "vladimir", age: 1 },
    { name: "Pablo", age: 29 },
    { name: "Andres", age: 55 },
    { name: "Carlos", age: 2 },
    { name: "Juan", age: 13 },
];

const auxobj = {
    name: "Josue",
    age: 22,
};

people2.push(auxobj);

for (let brayan = 0; brayan < people2.length; brayan++) {
    people2[brayan].heigth = brayan + 160;
}

for (let i = 0; i < people2.length; i++) {
    if (people2[i].name === "Carlos") {
        delete people2[i].heigth;
        people2[i].color = "transparent";
    }
}

const all = [
    { name: "Georg", email: "georg@academlo.com" },
    { name: "Georg", email: "georg@academlo.com" },
    { name: "Andrea", email: "andrea@gmail.com" },
    { name: "Andrea", email: "andrea@gmail.com" },
    { name: "Andrea", email: "andrea@gmail.com" },
    { name: "Andrea", email: "andrea@gmail.com" },
    { name: "Brayan", email: "brayan@gmail.com" },
    { name: "Stiven", email: "stiven@gmail.com" },
];

// for (let i = 0; i < all.length; i++) {
//     if (i === 3 || i === 4) {
//         all.splice(i, 1);
//     }
// }

// uno que no se repita tener en cuenta el includes
