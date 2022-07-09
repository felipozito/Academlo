const numbers = [1, 2, 3, 4, 5, 6];

function traditionalFor(numberSearch) {
    let search;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numberSearch) {
            search = numbers[i];
        }
    }

    return search;
}

function currentMethod(numberSearch) {
    return numbers.find(function (number) {
        return number === numberSearch;
    });
}
