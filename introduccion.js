const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// console.log("hello world");

// Declaración de variable con let
let myName = "Pato";
console.log(myName);

// Declaración de constante con const
const myNameAsConst = "Pato pero en constante";
console.log(myNameAsConst);

/* readline.question recibe dos parámetros, la pregunta que queremos hacer
    y la función callback a ejecutar */
//  \n significa new line o salto de linea 
readline.question("Ingresa el nombre de tu mascota\n", function(petName) {
    console.log("El nombre de tu mascota es: " + petName);
    readline.close();
});