//Funciones Puras - Pure Functions

const numero1 = 20;
const duplicar = numero => numero * 2; //Devuelven el mismo número de datos que reciben

const resultado = duplicar(numero1);//Una función pura no modifica el valor original de un dato

console.log(resultado);
console.log(numero1);