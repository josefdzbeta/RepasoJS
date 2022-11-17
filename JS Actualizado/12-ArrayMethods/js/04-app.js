//.filter

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado;

//Todos los productos mayor que 400
resultado = carrito.filter((producto) => {
    return producto.precio > 400;
});
console.log(resultado);

resultado = carrito.filter((producto) => {
    return producto.precio >600;
});
console.log(resultado);

//Traer todos menos uno
resultado = carrito.filter ((producto) =>{
    return producto.nombre !== 'Audifonos';
});
console.log(resultado);
