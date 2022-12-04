const producto = 'Monitor de 20 pulgadas';

//.replace para reemplazar
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor åCurvo'));


//.slice para cortar
console.log(producto.slice(0,10)); //Posiciones a mantener, el resto lo corta (dónde inicia a cortar, dónde termina)
console.log(producto.slice(8)); // Corta las primeras 8 posiciones
console.log(producto.slice(2,1)); // No hace nada, el primer número debe ser mayor que el segundo

// Alternativa a slice 
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); //substring si corta

const usuario = 'Jose';
console.log(usuario.substring(0,1));

console.log(usuario.charAt(0));


