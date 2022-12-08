const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 800},
    {nombre: 'Monitor 10 Pulgadas', precio: 700},
    {nombre: 'Monitor 210 Pulgadas', precio: 600},
    {nombre: 'Monitor 230 Pulgadas', precio: 500},
    {nombre: 'Monitor 220 Pulgadas', precio: 400},
    {nombre: 'Monitor 250 Pulgadas', precio: 300},
    {nombre: 'Monitor 260 Pulgadas', precio: 200},
]

// const resultado = carrito.filter(producto =>{
//     return producto.precio > 400;
// });

//Higher order function son funciones que toman una funcion o devuelven una función como argumento
const mayor400 = producto =>{
    return producto.precio > 400
}

const resultado = carrito.filter(mayor400);
console.log(resultado);