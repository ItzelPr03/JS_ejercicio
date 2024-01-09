
// Control de flujo (if-else)

/**
 * 
 * Pasos para declarar una estructura if-else
 * 
 * 1. palabras reservadas if
 * 2. Establecer una condicion
 * 3. delimitar el bloque que se ejecuta si la condicion se cumple
 */


// let n = 10;
// let n = 15;
// let n = 20;
// let n = 25;

//condicion que evalue si un numero "n" es mayor que 10
// if (n > 10){
//     console.log("El numero es mayor a 10")
// } else {
//     console.log("El numero no es mayor a 10")
// }

//Condicion que evalue si "n" es mayor que 10 y menor que 20

// if (n > 10 && n<20){
//          console.log("El numero es mayor a 10 y menor a 20")
//  } else {
//          console.log("El numero no es mayor a 10 ni menor a 20")
//  }

///////////////////////////////////////////////////////////////////
//Si mi numero es mayor a 10 y menor a 20
//Si mi numero es mayor que 10 y mayor que 20
//Si mi numero es igual a 10
//si mi numero es igual a 20
//si mi numero no es mayor que 10 ni menor que 20

// if (n>10 && n<20){
//     console.log("El numero es mayor a 10 y menor a 20")
// } else if (n>20){
//     console.log("El numero es mayor a 20")
// } else if (n===10){
//     console.log("El numero es igual a 10")
// } else if(n===20){
//     console.log("El numero es igual a 20")
// } else {
//     console.log("El numero no es mayor a 10 ni menor a 20")
// }



///////////////////////////////////////////////////////////
//Switch
/**
 * 1. Palabra reservada switch-case
 * 2. abrimos un parentesis (caso)
 * 3. abrir llaves que delimiten mi bloque de codigo {}
 */
let color= "azul";
//color.toLowerCase
//color.toUpperCaseg

switch(color){
    case "rojo":
        console.log("Tu color es rojo")
    break;

    case "verde":
        console.log("Tu color es verde")
    break;

    case "azul":
        console.log("Tu color es azul")
    break;

    default:
        console.log("No conozco ese color")
}


