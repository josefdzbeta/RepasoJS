const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Comprobar si un valor existe en un array
//Forma manual
meses.forEach( (mes) => {
    if (mes === 'Enero') {
        console.log('Enero si Existe');
    }
} );

//Method
const resultado = meses.includes('Enero');
console.log(resultado);

//En un array de metodos se utiliza .some para encontrar el elemento

const existe = carrito.some ((producto) => {
    return producto.nombre === 'Celular';
}); 

console.log(existe);

//Utilizar .some en un array de índices

const existe2 = meses.some((mes) => {
    return mes === 'Febrero';
} );

console.log(existe2);