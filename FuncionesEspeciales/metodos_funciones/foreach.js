const colors = ["amarillo", "rojo", "verde", "rosado", "negro"];

function tradicionalFor() {
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i], i, colors);
    }
}

function actualForeach() {
    colors.forEach(function (element, index, arrayComplet) {
        console.log(element, index, arrayComplet);
    });
}

actualForeach();
