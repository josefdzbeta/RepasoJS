const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 100},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Movil', precio: 300},
    {nombre: 'Xbox', precio: 400},
    {nombre: 'SmarWatch', precio: 500},
    {nombre: 'Agenda', precio: 600},
]

//carrito es el conjunto, producto es cada objeto
carrito.forEach(function(producto){
    console.log(`${producto.nombre} --Precio: ${producto.precio}`);
})

carrito.map(function(producto){
    console.log(`${producto.nombre} --Precio: ${producto.precio}`);
})
//Nuevo array si puede guardar el valor porque .map genera un nuevo array con los valores
const nuevoArray = carrito.map(function(producto){
    return `${producto.nombre} --Precio: ${producto.precio}`;
})
const nuevoArray2 = carrito.forEach(function(producto){ // no es valido
    return `${producto.nombre} --Precio: ${producto.precio}`;
})

console.log(nuevoArray); // Si es posible porque map genera un nuevo array y se puede guardar en una variable
console.log(nuevoArray2); //devuelve undefined

//la diferencia entre map y forEach es que map crea un Array nuevo