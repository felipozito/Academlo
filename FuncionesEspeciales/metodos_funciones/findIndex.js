const numbers = [1, 2, 3, 4, 5, 6];

function traditionalFor(numberSearch) {
    let search;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numberSearch) {
            search = i;
        }
    }

    return search;
}

function currentMethod(numberSearch) {
    return numbers.findIndex(function (number) {
        return number === numberSearch;
    });
}

console.log(currentMethod(4));
