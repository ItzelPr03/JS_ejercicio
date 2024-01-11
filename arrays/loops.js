
//Bucle o loop


const names = ["Itzel", "Sunny", "Toffee", "Ronni", "Juan"];
console.log(names.length);

//For
for(let count = 0; count <= names.length; count++){
    console.log (names[count]);
}
for (let i= 0; i<= names.length- 1;i++){//el -1 evita que se pase de la posicion de los elementos
    console.log(names[i]);
}
/* 
    for (let i=0; i<= 1500; i++){
      console.log(i);
    }
    for (let i = 1500; i>0; i--){
        console.log(i);
    }
*/ 

//While
let count = 1;

/*
while(count<= 10){
    console.log(count);
    count++;
}
*/
/**loop infinito
*while (true = true){
*    console.log(true)
*}
*while(count <= Infinity){
* console.log(count);
* count++; 
*}
**/


//Do while
//El procedimiento interno se realiza si o si al menos una vez
//se cumpla o no la condicion, se va a ejecutar al menos una vez

do{
    console.log(count);
    count++;
} while(count<= 5);

// forEach
/**funciones anonimas, que no tienen nombre ni nada
 * las funciones flecha se pueden declarar a fuera o adentro de otra funcion (como abajo)
 * es mas comun usar la funcion flecha que declarar una funcion y usarla dentro
 * El forEach se detiene cuando ya no hay elementos, no necesita un contador
**/
names.forEach((user) =>{
    console.log(user)
})


/**
 * function printName(name) {
 * console.log("Username: "+name)
 * }
 * names.forEach((user) => {
 * printName(user)
 * })
 */

//Funcion que utilice loops y que resulte en factorial 
//de un numero n donde 1000>n>0

const n= 5;

const calcFact = (number) => {
    let res = 1;
    for(number; number>= 1; number--){
        //res= number * res, es lo mismo que abajo
        res*=number;
    }
    return res;
}

console.log(calcFact(n));

//Recursividad 
//Se refiere a utilizar la constante dentro de la misma constante

const factorial = (num) => {
    if (num == 1) {
        factorial(num *num - 1);
    }
    return num;
}
