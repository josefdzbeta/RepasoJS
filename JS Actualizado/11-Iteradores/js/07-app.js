//For of

const pendientes = [ 'tarea', 'comer', 'proyecto', 'Estudiar JavaScript']

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 100},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Movil', precio: 300},
    {nombre: 'Xbox', precio: 400},
    {nombre: 'SmarWatch', precio: 500},
    {nombre: 'Agenda', precio: 600},
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}
for (let producto of carrito) {
    console.log(producto.nombre);
}

// for (let iterator of object) {
    
// }