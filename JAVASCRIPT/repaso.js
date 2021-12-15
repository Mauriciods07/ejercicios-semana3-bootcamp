/* 
arreglos
*/

const comidas = ['Pozole', 'Quesadillas', 'Tacos'];

/* 
length
*/
console.log(comidas.length);

/* 
push - colocar nuevo elemento al final del arreglo
pop - retirar último elemento de un arreglo
unshift - colocar un elemento en el primer lugar de un arreglo
shift - quitar un elemento en el primer lugar de un arreglo
*/

comidas.push('Torta');
console.log(comidas);

comidas.unshift('Pancito');

/* 
forEach - nos puede servir para realizar una acción
por cada elemento de nuestro elemento

usa una función expresada o anónima - no tiene nombre 
y se puede almacenar en una variable (como lambda xd)

array.forEach(element => {
    
});
*/

comidas.forEach(function(elementos){
    console.log(elementos);
})

comidas.forEach(element => {
    console.log(element);
});

const numero = [1, 2, 3, 4];
numero.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
})

/* 
Guardar de manera automática los datos que nos
provea una función dentro de un arreglo

Ejercicio
*/
const arr = [];

function sumar(num){
    let sumNum = num + 1;
    // return arr.push(sumNum);
    return arr.unshift(sumNum);
}

console.log(arr);

sumar(3);
sumar(5);
sumar(6);
sumar(2);
sumar(78);

console.log(arr);