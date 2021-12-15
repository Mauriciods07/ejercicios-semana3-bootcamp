/* 
    Condicionales
        Se utilizan para tomar decisiones
            dentro de nuestro programa

        if (codigo) {
            codigo;
            codigo;
        }
*/

let edad = parseInt(prompt('¿Cuál es tu edad?'));

if (edad >= 18 && edad < 30) {
    document.write('Eres un joven.');
}
else if(edad >= 30 && edad < 60) {
    document.write('Eres un adulto.');
}
else if(edad >= 60) {
    document.write('Eres un adulto mayor.');
}
else if(edad < 0) {
    document.write('Esa no es una edad válida.')
}
else {
    document.write('Eres un niño.');
}