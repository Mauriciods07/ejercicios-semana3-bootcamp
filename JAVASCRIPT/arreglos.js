/* 
Arreglos: Colección de elementos
Cuentan con métodos o funciones que nos permiten ordenar o
    manipular los datos que almacenemos
*/

// manera 1
const array1 = [4, 'hola', true, []];
console.log(array1);

// manera 2 - más usada
const array2 = Array.of(1, 'Hola', true);
// (n) [i, i+1, i+2, ...], n = número de elementos en el array
console.log(array2);

// manera 3 - menos usada
const arreglo3 = new Array(3, true, 'hola');

const frutas= ['manzana', 'naranjas', 'uvas', 'sandias', [1,2,3,4,5,['A', 'B', 'C']]];

// notación de los corchetes
console.log(frutas[4][2]);

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

frutas.push('papaya');
console.log(frutas)

/* 
length = longitud
*/
const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* 
push = añade un elemento al final de nuestro arreglo
*/
letras.push('E');
console.log(letras);

/* 
pop = elimina el último elemento
*/
letras.pop();
console.log(letras);

/* 
unshift = agrega un elemento al inicio
*/
letras.unshift(1);
console.log(letras);

/* 
shift = elimina el primer elemento
*/
letras.shift();
console.log(letras);

console.log(frutas[4]);
frutas[4][5].push('D');
console.log(frutas[4]);