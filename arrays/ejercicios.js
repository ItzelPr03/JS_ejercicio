
//Ejercicios Canvas
/*
Sum of Resistors in Series
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/
let sumResitance= [-14,3.5,6]
let sum = 0
for(let i= 0; i<sumResitance.length; i++){
    if (sumResitance[i] < 0){
        sumResitance[i] = sumResitance[i] * -1
        sum += sumResitance[i]
    }else{
    sum += sumResitance[i] //+= es lo mismo que sum + sumResitance, sum solo se usa una vez. la i se refiere al elemento drentro del array
    }
     
}
console.log(sum+ " ohms")

 
/*
Number divided into halves
Given a number, return the number divided into its halves in an array.
 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/
const numDiv = number =>{
    const halvesArray= [];
    const half= number/2;
    while(number != 0){
        halvesArray.push(half);
        number-= half;
    }
    return halvesArray;
}

console.log(numDiv(2))
console.log(numDiv(4))
console.log(numDiv(10))

/*
Secret Society
 
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/
const secretNames = members =>{
    let societyCapitals = []; //Aqui almacenamos la primera letra de cada nombre
    let society = "";           //Forma la palabra final
    
    for (let index=0; index< members.length; index++){
        const member = members [index];
        societyCapitals.push(member[0]) // el 0 se refiere a la posicion del primer caracter
    }

    societyCapitals.sort(); //acomoda en orden alfabetico (strings) o en orden ascendente (numeros)

    for (let index=0; index< societyCapitals.length; index++){
    society = society + societyCapitals[index];
    
    }
    return society;
    
}


console.log(secretNames(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretNames(['Harry', 'Ron', 'Hermione']));

/*
Online status
 
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/
/*
1. Obtener la cantidad total de usuarios
2. Calcular usuarios restantes, eliminando del total los primeros 2
3. obtener los primeros 2
4. Imprimir mensaje
*/
const users= ['mockIng99', 'J0eyPunch', 'glassedFer','itzelpr','anon123']

function getLength(arr){
    return arr.length;
}

function calcRemaining(total){
    return total-2;
}
function getUsers(arr){
    const users = arr[0] + arr [1]
    return users;
}
function onlinestatus1(arr){
    const total = getLength(arr)
    const rest = calcRemaining (total)
    const firstUsers = getUsers(arr)
    console.log(`Users: ${firstUsers} and ${rest}`)
}

/////////////////////////////////////////////////

const onlineStatus= arr => {
    if (arr.length != 0) {
        if (arr.length>=3) {
            const firstUsers = getUsers(arr);
            console.log(`Users: ${firstUsers}, and ${arr.length-2} are online`)
        }else {
            console.log(`Users: ${arr.join(',')} are online`)
        }
    } else {
        console.log('There are no users online')
    }
}

onlineStatus(users)
onlinestatus1(users)


/*
Array of Multiples
 
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

//1. Hacer multiplicaciones como tabla de multiplicar, *2 *3 etc.
//2.Guardar en arreglo []
//3. imprimir arreglo



function multiplos(n,l){
    let mult = []
    for (let count=1; count < l; count++){
        let arr= count*n;
        mult.push(arr)
        // console.log(arr)
    }
    console.log(mult)
}
multiplos(3,4)


/*
Positive dominance in Array

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

//1. Loop por cada elemento
//2. Total de positivos
//3. Cantidad total y dividir sobre 2
//4. comparamos e imprimir boolean

const numArr = [-1000,-1, 50, 1, 2, 5];
const negativeArr = [-1000,-1, -50, -1, 5, 2];

function positiveArr(arr){
    let positiveCount = 0;
    arr.forEach((num) => {
        if(num > 0){
            positiveCount++;
        }
    })
    const mid= arr.length / 2;
    return positiveCount > mid
}

const res= positiveArr(negativeArr)
console.log(res)


/*
Antipodal Average

Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
//1. declarar un array
//2. utilizar splice
//3. utilizar if para remover el dato del centro
//4. sumar cada elemento de la primera parte con la segunda parte pero con posiciones invertidas
//5. dividir cada numero entre 2
//6. imprimir el array resultante

const splitArr= num =>{
    let arr1=[]
    let arr2=[]
    let lenArr= num.length
    // console.log(lenArr) // para comprobar que funciona
    let i= Math.trunc(lenArr /2)
    if(lenArr%2!=0){
        arr1= num.slice(0,i) //slice no toma el ultimo argumento del indice que se especifica, cuenta como humano (1 en adelante)
        arr2= num.slice(i+1,lenArr).reverse() //reverse() invierte el orden del array
        console.log(arr1)
        console.log(arr2)
    } else {
        arr1= num.slice(0,i) 
        arr2= num.slice(i,lenArr).reverse();
        console.log(arr1)
        console.log(arr2)
    }
    //Los console.log son para confirmar que los pasos estan bien
    //Me atore con la suma de los arreglos, pero la forma completa esta abajo
}

 const arr= [2,4,6,5,7,8];

function splitArr1(arr){
    const half = arr.length/2
    const arr3 = arr.slice(0,half);
    const arr4 = arr.slice(half,arr.length).reverse();
    //console.log(arr4);
    let res = [];
    for (let count=0;count<arr3.length; count++){
        res.push((arr3[count]+arr4[count])*.5)
    }
    console.log(res)

}


splitArr([2,4,6,5,7,8])
splitArr1(arr)





