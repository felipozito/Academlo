// const numbers = [1, 2, 3, 4, 5, 6];

// const aux = numbers.reduce(function (acum, current) {
//     console.log({ current, acum });
//     acum = acum + current;

//     return acum;
// });

// console.log(aux);

const str = "hola mundo que mas pues";

const aux = str.split("").reduce((acum, current) => {
    acum[current] ? acum[current]++ : (acum[current] = 1);

    return acum;
}, {});

console.log(aux);
