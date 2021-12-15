/* Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js) */

function pagar(precio){
    if(precio < 100) {
        precio *= 0.9;
    }
    else if (precio >= 100 && precio < 200) {
        precio *= 0.8;
    } 
    else if(precio >= 200) {
        precio *= 0.7;
    }
    document.write('<h1>El precio a pagar es de $' + precio + '</h1>');
}

let precio = parseInt(prompt('Ingrese el pago:'));
pagar(precio);