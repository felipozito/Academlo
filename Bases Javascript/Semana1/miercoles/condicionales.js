// const hora = 15;
// let saludoPorHora;

// if (hora >= 4 && hora <= 12) {
//     saludoPorHora = "Buenos días";
// } else if (hora > 12 && hora <= 18) {
//     saludoPorHora = "Buenas tardes";
// } else {
//     saludoPorHora = "Buenas noches";
// }

// function Saludar(hora) {
//     return hora >= 4 && hora <= 12
//         ? "Buenos días"
//         : hora > 12 && hora <= 18
//         ? "Buenas tardes"
//         : "Buenas noches";
// }

// console.log(Saludar(1));

// 3. Crea una función que reciba como parámetro un string con un nombre del mes y bebe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido".
let mes = "Enero";

function nombreEstacion(month) {
    let parseMonth = month.toLowerCase();

    return parseMonth === "enero" ||
        parseMonth === "febrero" ||
        parseMonth === "marzo"
        ? "Invierno"
        : parseMonth === "Abril" ||
          parseMonth === "mayo" ||
          parseMonth === "junio"
        ? "Verano"
        : parseMonth === "julio" ||
          parseMonth === "agosto" ||
          parseMonth === "septiembre"
        ? "Otonio"
        : parseMonth === "octubre" ||
          parseMonth === "noviembre" ||
          parseMonth === "diciembre"
        ? "Primavera"
        : "Mes no valido";
}

// console.log(nombreEstacion(mes));

// 4. Crea una función que retorne verdadero si el número recibido por parámetro es par y falso si es impar.
// function parOimpar(num) {
//     return num % 2 === 0 ? "Par" : "Impar";
// }

// console.log(parOimpar(5));
// console.log(parOimpar(6));
// console.log(parOimpar(7));
// console.log(parOimpar(8));

// function order(num1, num2, num3, num4) {
//     return num1 + " " + num2 + " " + num3 + " " + num4;
// }

// console.log(order(4, 3, 2, 1));

// 5 Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.

function condicionalNumero(num) {
    try {
        if (!num) {
            throw new Error("No se ha encontrado el parametro");
        }

        if (typeof num === "string") {
            throw new Error("Se ha enviado por parametro un string");
        }

        return num > 10 ? num : num + num;
    } catch (error) {
        return "Se ha manejado el error " + error;
    }
}

// console.log(condicionalNumero());
