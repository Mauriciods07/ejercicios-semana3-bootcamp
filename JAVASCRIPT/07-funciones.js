/* 
Las funciones nos sirven para escribir bloques de código que se
puede reutilizar.
*/
/* 
palabra reservada seguida de nobre de la función,
seguida de paréntesis, seguida de llaves

function nombre(argumentos) {
    return
}

funtion(argumentos);
*/

/* let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2;
document.write('<h1>' + suma + '</h1>');

let numero3 = 23;
let numero4 = 2132;
let suma2 = numero3 + numero4;
document.write('<h1>' + suma2 + '</h1>'); */

function sumar(numero1, numero2) {
    let suma = numero1 + numero2;
    document.write('<h1>' + suma + '</h1>');
}

sumar(1, 2);
sumar(50, 8);
sumar(33, 12);