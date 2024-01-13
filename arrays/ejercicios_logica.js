//Realiza los siguientes ejercicios en JS y entrega por medio de un link tu repositorio que contiene los ejercicios resueltos.
// Se utilizo install prompt-sync para poder ver los prompts en la terminal e interactuar con esta


/*
User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
Store the information and then showcase it in the console. 
Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/
const prompt=require("prompt-sync")();

// const nombreUsuario = prompt("Introduzca su nombre")
// const age = prompt("Introduzca su edad")
// let pelisFav= prompt ("Introduzca una pelicula favorita")
// let otraPeli = prompt("Desea agregar otra pelicula? S/N")

// if(otraPeli="S"){
//     pelisFav.push=prompt("Introduzca otra pelicula favorita")
// }else if(otraPeli=="N"){
//     console.log("una de mis pelis favs es " + pelisFav[0])
// } else{
//     prompt("elija de nuevo")
// }
// console.log(`Nombre de usuario: ${nombreUsuario} Una de mis pelis favs es: ${pelisFav}`)




/*
Highest number
Write a program that asks for 10 numbers. 
Using logical operators and any other javascript functions/structures you've seen before, 
determine and output the highest of those numbers.
*/
// const numeros= prompt("introduzca 10 numeros")
let arr=[]
for(let count=0;count<10;count++){
    const numeros= prompt("introduzca "+ (10-count)+" numeros")
    arr.push(numeros)
    
}

console.log(arr)
console.log(Math.max(parseInt(arr)))


/*
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) 
is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/

/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/




