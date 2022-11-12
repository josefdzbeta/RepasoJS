//...spread operator o rest operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Spread operator con array de indices
const meses2 = [...meses, 'Agosto']


console.log(meses2);

//Spread operator o Rest operator con objetos
const producto = { nombre: 'Disco duro', precio: 300} //Objeto

//No utilizamos el rest operator al añadir un objeto al array de objetos
const carrito2 = [...carrito, producto]
console.log(carrito2);
