const producto = '               Monitor 20 de pulgadas             ';

console.log(producto);
console.log(producto.length);


//Eliminar del inicio 
console.log(producto.trimStart());

//eliminar espacio en blanco del final
console.log(producto.trimEnd());

//chaining 
console.log(producto.trimStart().trimEnd());


//eliminar espacios en blancos en ambas direcciones
console.log(producto.trim());