
//Array
let names= ["Zabdiel", "Fernando", "Magali", "Yare"];
let numbers= [10, -1000, 5.5 , 40, 30]

// Acceder a la info de un array
//

const userData= ["Itzel", 28, "Generation Mexico", "Mac Miller"];

//print
console.log(userData);

//Longitud
console.log(userData.length);

//se puede hacer de estas dos formas, la segunda es 
//declarando una constante y despues imprimiendo el resultado
//const arrLength = userData.length;
//console.log(arrLength);


//Indices y/o posiciones son diferentes a la longitud
// Indicamos la posicion dentro de corchetes [pos]
console.log(userData[0]);

// const username = userData [0];
// console.log("Mi nombre es "+username);

//Matrices
const matrix= [[-1, 0], [1, -1]];
//eje x y eje y
console.log(matrix[0][1]);

//Pop elimina el ultimo dato dentro de un array
userData.pop()
console.log(userData)

//Push agrega un dato hasta el final del array
userData.push("ABBA")
console.log(userData)

//Join une los elementos con el character o string que indiquemos
console.log(userData.join(" "))

//Shift elimina el primer elemento y acomoda el resto
console.log(userData.shift())
console.log(userData)

//Unshift agrega uno o mas datos al principio del array y devuelve la nueva longitud
console.log(userData.unshift("Sonia"))
console.log(userData)


