/* 

Operadores ariméticos nos sirven para hacer operaciones

    + Sirve para sumar o concatenar
    - sirve para restar números
    * sirve para multiplicar 2 números
    / división nos sirve para dividir dos números
    % módulo nos sirve para obtener el residuo de una división
*/

// leer y parsear los valores
let numero1 = parseInt(prompt('Ingresa el número 1: '));
let numero2 = parseInt(prompt('Ingresa el número 2: '));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

console.log('Número 1: ' + numero1);
console.log('Número 2: ' + numero2);
console.log('La suma es ' + suma);
console.log('La resta es ' + resta);
console.log('La resta es ' + multiplicacion);
console.log('La división es ' + division)

if(numero2 == 0) {
    console.log('No se puede dividir entre cero');
}
else {
    console.log(division);
}

console.log(5 % 3);

/* 
    Operadores lógicos
    && AND o y
    || OR o o
    ! NOT o no

*/

console.log('1.- ' + (true&&true)); // true
console.log('2.- ' + (false&&true));    // false
console.log('3.- ' + (true&&false));    // false
console.log('4.- ' + (false&&false));   // false
console.log('5.- ' + (true||true)); // true
console.log('6.- ' + (true||false)); // true
console.log('7.- ' + (false||true));    // true
console.log('8.- ' + (false||false));   // false
console.log('9.- ' + !(false||true));   // false
console.log('10.- ' + !(false&&true));  // true
console.log('11.- ' + (!false&&true));  // true
console.log('12.- ' + (!true&&true));   // false
console.log('13.- ' + (!false||false)); // true