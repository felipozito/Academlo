const numbers = [1, 2, 3, 4, 5, 6];

function traditionalMap(params) {
    const newArray = [];

    for (let i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i] * params);
    }

    // numbers.forEach((element) => newArray.push(element * params));

    return newArray;
}

const arrayMap = numbers.map(function (n) {
    return n * 10;
});
