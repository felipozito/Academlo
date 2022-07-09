import gato from "./formas/exportDefault.js";
import { contador, contador1, contador2, contador3 } from "./formas/export.js";
import { create, del, read, upd, users } from "./formas/lib.js";

import "./formas/modulo.js";

const crud = gato();
crud.create({ name: "brayan", age: 22 });
crud.read((n) => console.log(n));

console.log({ contador, contador1, contador2, contador3 });
console.log({ create, del, read, upd, users });
