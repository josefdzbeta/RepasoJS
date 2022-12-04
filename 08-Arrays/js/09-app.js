const carrito = [
    {nombre: 'Monitor de 27 pulgadas'},
    {nombre: 'Televisor'},
    {nombre: 'Movil'},
    {nombre: 'Xbox'},
    {nombre: 'SmarWatch'},
    {nombre: 'Agenda'},
];

for(let i=0; i<carrito.length; i++){

    console.log(`${carrito[i].nombre} --Precio: ${carrito[i].precio}`);

}

//carrito es el conjunto, producto es cada objeto
carrito.forEach(function(producto){
    console.log(`${producto.nombre} --Precio: ${producto.precio}`);
    
});