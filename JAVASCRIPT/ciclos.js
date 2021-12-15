/* 
Ciclos - Bucles - Loops

while
do while
for
*/

// While
/* 
let condicion = 1; - valor inicial
while(condicion){
    código
}
*/

let iterador = 1;
while(iterador <= 10){
    console.log(iterador);
    iterador++;
}

let numero = 1;
numero++; // 2
numero++; // 3
numero++; // 4
numero--; // 3
numero--; // 2
numero--; // 1
console.log(numero);

/* 
do while
imprimir todos los números del 1 - 10
*/

let numeroN = 1;

do {
    console.log(numeroN);
    numeroN++;
} while(numeroN <= 10);

console.log(numero);

/* 
for 
Utiliza un contador para realizar las acciones
*/

for (let index = 0; index < 10; index++) {
    console.log('Hola');
}

const alimentos = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];
for(let i=0; i < alimentos.length; i++){
    console.log(alimentos[i]);
}