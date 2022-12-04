//Forma declarativa

const carrito = [];

//Definir un producto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 400
};
const producto2 = {
    nombre: 'Movil',
    precio: 200
};

const producto3 = {
    nombre: 'teclado',
    precio: 50
};

let resultado;

//forma declarativa de añadir elementos a un array
resultado = [...carrito, producto];
resultado = [...resultado, producto2];

//Añadir al principio
resultado = [producto3,...resultado];



console.table(resultado);