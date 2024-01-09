
/**
 * Declaracion de funciones
 * 
 * 1. Palabra reservada function
 * 2. Asignar un nombre
 * 3. Colocar parentesis y despues llaves
 */

// Funcion sensilla, sin parametros, no devuelve ningun valor
function miFuncion() {
    console.log("Mi primera funcion");
}

// Funcion que salude a quien la mande a invocar
function saludarUsuario(nombre) {
    // console.log("Hola "+ nombre);
    // la manera de abajo es mejor porque se concatena mas facilmente, siempre utilizando ` y el ${}
    console.log(`Hola ${nombre}`)
}

//  Funcion que realice la suma de 4 numeros diferentes
function sumarNumeros(a,b,c,d){
    return `La suma de los numeros es: ${a+b+c+d}`;
}

/////////////////////////////////////////////////////

// Funciones flecha
/**
 * 
 * 1. Palabra reservada const
 * 2. asignar nombre
 * 3. operador de asignacion "=" y parametros ()
 * 4. fat arrow => y llaves {}
 */

const miFuncionFlecha = () => {
    console.log("Mi primera funcion "+"en JavaScript");
} 

// cuando es una sola instruccion, se pueden omitir las llaves {

