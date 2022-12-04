//.every necesita que todos los elementos del array cumplan la condición para devolver true
//.some revisa que algunos cumplan la condicion y devuelve true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado = carrito.every((producto) => {
    return producto.precio < 1000;
});
console.log(resultado);