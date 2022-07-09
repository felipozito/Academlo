const colors = ["amarillo", "rojo", "verde", "rosado", "negro", "amarillo"];

function traditionalFilter(str) {
    const newArray = [];

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === str) {
            newArray.push(colors[i]);
        }

        // if (colors[i].includes(str)) {
        //     newArray.push(colors[i]);
        // }
    }

    return newArray;
}

console.log(
    colors.filter(function (c) {
        return c.includes("a");
    })
);
