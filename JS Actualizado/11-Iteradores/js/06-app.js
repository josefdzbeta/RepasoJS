//forEach y .map

const pendientes = [ 'tarea', 'comer', 'proyecto', 'Estudiar JavaScript']

pendientes.forEach( (pendiente, indice) => console.log(`${indice} ${pendiente}`) )

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 100},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Movil', precio: 300},
    {nombre: 'Xbox', precio: 400},
    {nombre: 'SmarWatch', precio: 500},
    {nombre: 'Agenda', precio: 600},
]

carrito.forEach( (producto) => console.log(producto.nombre))

const nuevoArray = carrito.map( (producto) => console.log('mapaMundi'))

console.log(nuevoArray);