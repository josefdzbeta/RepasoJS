const carrito = [
    {nombre: 'Monitor de 27 pulgadas'},
    {nombre: 'Televisor'},
    {nombre: 'Movil'},
    {nombre: 'Xbox'},
    {nombre: 'SmarWatch'},
    {nombre: 'Agenda'},
]

//carrito es el conjunto, producto es cada objeto
carrito.forEach(function(producto){
    console.log(`${producto.nombre} --Precio: ${producto.precio}`);
})

carrito.map(function(producto){
    console.log(`${producto.nombre} --Precio: ${producto.precio}`);
})

const nuevoArray = carrito.map(function(producto){
    return `${producto.nombre} --Precio: ${producto.precio}`;
})
const nuevoArray2 = carrito.forEach(function(producto){ // no es valido
    return `${producto.nombre} --Precio: ${producto.precio}`;
})

console.log(nuevoArray); // Si es posible porque map genera un nuevo array y se puede guardar en una variable
console.log(nuevoArray2); //devuelve undefined

//la diferencia entre map y forEach es que map crea un Array nuevo