//break y continue (Break para iteracion, continue nos permite interceptar un elemento, identificarlo y continuar la ejecución )

for (let i = 0; i < 10; i++) {
    if(i === 5 ){
        console.log('Cinco');
        continue
    }
    
}

const carrito = [
    {nombre: 'Monitor de 27 pulgadas'},
    {nombre: 'Televisor'},
    {nombre: 'Movil'},
    {nombre: 'Xbox'},
    {nombre: 'SmarWatch'},
    {nombre: 'Agenda'},
]

console.log(carrito.legnth);

for(let i = 0 ; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}
for(let i = 0 ; i<carrito.length; i++){
    if(carrito[i].descuento){

        console.log(`El articulo carrito[i].nombre Tiene descuento $`);
    }
}