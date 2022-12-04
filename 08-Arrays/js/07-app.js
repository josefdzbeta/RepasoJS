// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']

// meses.push('Abril')

//Forma imperativa
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
const producto4 = {
    nombre: 'Televisor',
    precio: 230
};

//Añadir al final del array
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

//Añadir al principio del array
carrito.unshift(producto3);

// console.log(carrito);

// //Eliminar último elemento de un array
// carrito.pop()
// console.log(carrito);

//Eliminar del inicio de un array
// carrito.shift()
console.table(carrito);
carrito.splice(1,1);
console.table(carrito);