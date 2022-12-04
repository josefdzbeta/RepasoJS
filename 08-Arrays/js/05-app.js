// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']

//Añadir al final del array
// meses.push('Abril')

//Forma imperativa
const carrito = [];

//Definir un objeto

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

//Añadir al principio del array

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.log(carrito);