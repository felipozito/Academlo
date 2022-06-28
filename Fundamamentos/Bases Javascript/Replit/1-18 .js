//  **1.Encuentra la última letra de un string **
// La función findLastLetter() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener el último caracter
// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", debera retornar la letra k
function findLastLetter(text) {
      return text[text.length - 1];
}
// ** 2.Encuentra la última palabra de un string **
// La función findLastWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener la última palabra
// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", deberás retornar la palabra Erik
function findLastWord(text) {
      // escribe tu solución aquí
      let x = text.split(" ");
      return x[x.length - 1];
}
// ** 3.Encuentra la segunda palabra de un string **
// La función findSecondWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener la segunda palabra` Ejemplo: Si el string que recibe es "Hola, me llamo Erik" deberás retornar la palabra me
function findSecondWord(text) {
      // escribe tu solución aquí
      let x = text.split(" ");
      return x[1];
}
// **4.Suma los elementos de un arreglo
// La función sumValues() recibe como parámetro un arreglo con 3 elementos de tipo Number, tu labor es tomar los 3 valores y sumarlos, en esta ocasión tendrás que hacer que la función sumValues los retorne utilizando return.
// Ejemplo: Si el array que recibe es [1, 2, 3], deberás utilizar return para devolver 6 que es la suma de todos los elementos.
function sumValues(array) {
      let result = 0;
      array.forEach((item) => (result = result + item));
      return result;
}
//**5. */ Obtén el correo de un usuario
// La función getEmail() recibe como parámetro un objeto con las propiedades email y age, tu labor es obtener el correo y retornarlo utilizando return. Ejemplo: Si el objeto que recibe es
// { name: "Erik", email: "erik@academlo.com" }
// deberás utilizar return para devolver "erik@academlo.com".
function getEmail(user) {
      return `${user.email}`;
}
