
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

/////////////////////////////////////////////////////////////////////////////////

/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * 1. calcular el perimetro de un circulo
 * 2. calcular el area de un rectangulo
 * 3. calcular el cuadrado de un numero
 * 4. calcular la conversion de grados celsius a farenheit
 * 5. calcular el valor del voltaje dadas la resistencia y la corriente
 * 6. calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

//Calcular perimetro
function perimetro(radio){
    console.log("perimetro= "+radio*2*Math.PI)
}

//Calcular area de un rectangulo
function areaRectangulo(b,h){
    console.log("area= "+ b*h)
}

//calcular el cuadrado de un numero
function cuadrado(a){
    console.log("cuadrado= "+ a*a)
}

//Celcius a farenheit
function grados(a){
    console.log("farenheit= "+( a * (9/5)+32))
}

//Calcular voltaje
function voltaje(r,c){
    console.log("voltaje= "+ r*c)
}

//Calcular volumen de una esfera
function volumenEsfera(radio){
    console.log("Volumen= "+ (Math.pow(radio,3)*Math.PI*(4/3)) )
}
