
/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 * 
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 * 
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 * 
 * Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

// Declarar 10 variables de cada tipo

var nombre1 = "Itzel";
var apellido1 = "Perez";
var edad1 = 28;
var numMascotas1 = 3;
var mayorEdad1 = true;
var comePicante1 = true;

let nombre2 = "Juan";
let apellido2 = "Franco";
let edad2= 34;
let numMascotas2 = 2;
let mayorEdad2 = true;
let comePicante2 = true;

var nombre3 = "Carla";
var apellido3 = "Perez";
var edad3 = 12;
var numMascotas3 = 6;
var mayorEdad3 = false;
var comePicante3 = false;

let nombre4 = "Daniel";
let apellido4 = "Rodriguez";
let edad4= 30;
let numMascotas4 = 0;
let mayorEdad4 = true;
let comePicante4 = false;

const nombre5 = "Mariana"
const apellido5 = "Cruz"
const edad5 = 14;
const numMascotas5 = 1;
const mayorEdad5 = false;
const comePicante = true;

// operaciones
let num1 = 25;
let num2 = 7;
let num3 = 40;

let suma = num1 + num3;
console.log("suma = "+ suma);

let resta = num3 - num1;
console.log("resta = "+resta);

let multiplicacion = num1 * num2;
console.log("multiplicacion = "+multiplicacion);

let division = num3/num2;
console.log("division = "+division);

// texto concatenado
let texto1 = "Me gusta aprender "
let texto2 = "sobre programacion "
let texto3 = "en el bootcamp de Generation "
let texto4 = "y "
let texto5 = "ser parte de la CH36 "

let oracion = texto1+texto2+texto3+texto4+texto5
console.log(oracion)

//Conversion
let edadString1 = String(edad1)
let mascotaString1 = String(numMascotas1) 
let mayorEdadNum1 = Number(mayorEdad1)
let mayorEdadNum3 = Number(mayorEdad3)
let edadString3 = String(edad3)


