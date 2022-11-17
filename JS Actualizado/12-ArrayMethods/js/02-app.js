const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach((mes, indice) =>{
    if (mes === 'Abril'){
        console.log(`Encontrado en el índice ${indice}`);
    }
} );

//Encontrar el índice de Abril
//Si escribes llaves dentro de un arrow function, debes escribir la palabra return

const indice = meses.findIndex((mes) =>{
   return mes === 'Abril'; 
});

console.log(indice);

//Ejemplo sin llaves
const indice2 = meses.findIndex ( mes => mes === 'Abril');
console.log(indice2);

//Ecnontrar un indice en un array de objetos

const indice3 = carrito.findIndex( (producto) => {
    return producto.precio === 100;
});
console.log(indice3);