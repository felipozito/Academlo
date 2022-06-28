// ? string;

//  1   2   3   4   5   6   7   8   9   10 => longitud
// "H" "O" "L" "A" " " "M" "U" "N" "D" "O" => string
//  0   1   2   3   4   5   6   7   8   9  => pocisiones o indices

// ? array;

// const myArray = [1, 2, 3, 4, 5];
//  1  2  3  4  5 = > logitud
// [1, 2, 3, 4, 5] => array
//  0, 1, 2, 3, 4 => posicion o indice

// console.log(myArray[4], " Posicion");
// console.log(myArray.length, " Longitud");

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(i + " => indices " + myArray[i] + " => Valor");
// }

// const arrayNames = ["Brayan", "Franco", "Francisco", "Carlos", "Roger", "lily"];

// // for (let i = 0; i < arrayNames.length; i++) {
// //     console.log(arrayNames[i]);
// // }

// console.log(arrayNames.length); // longitud del array
// console.log(arrayNames[1]);
// console.log(arrayNames[3]);

// arrayNames.push("Stiven");

// console.log(arrayNames);
// const deleteName = arrayNames.pop(); // se elimina el ultimo
// console.log(deleteName, " Nombre eliminado");
// console.log(arrayNames);
// arrayNames.shift(); // el primero se elimina
// console.log(arrayNames);
// console.log(arrayNames.slice(-1));

// console.log(arrayNames.slice(2, 4));
// console.log(arrayNames.splice(3));

// const arrayNames = ["Brayan", "Franco", "Francisco", "Carlos", "Roger", "lily"];
// const str = "brayan stiven";

// str[2] = "A";
// arrayNames[2] = "franciscoo";

// console.log(arrayNames);

// for (let i = 0; i < arrayNames.length; i++) {
//     if (i === 2) {
//         arrayNames.concat(["Stiven"]);
//     }
// }

// const data = ["hola"];

// const isArrayXD = Array.isArray(data);
// console.log(isArrayXD);

// const nombresGlobales = ["Jorge", "Juan", "Carlos", "Luis", "Pedro", "Marcos"];
// nombresGlobales.splice(1, 2, "Brayan");
// console.log(nombresGlobales);

// const isMyArray = [1, 2, 3, "brayan", true, null, [1, 23, 4, [1, 2, 3]]];

// console.log(isMyArray[6][3][1]);

const nombres = ["leo", "eduardo", "brayan", "carlos"];
nombres.splice(2, 0, "antonio");
console.log(nombres);
