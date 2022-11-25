//un set te permite crear una lista sin duplicados
const carrito = new Set();

//Añadir valor
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); //No lo agrega

console.log(carrito.has('Camisa')); //true //Comprueba si un valor existe en el set
console.log(carrito.has('Guitarra')); //false

carrito.delete('Disco #3'); //Elimina un valor

console.log(carrito.size); //saber cuánto mide

carrito.clear(); //Elimina los elementos

carrito.forEach(producto => { //Los Sets son iterables
    console.log(producto);
});
carrito.forEach((producto , index)=> { //Los Sets son iterables //Llave o valor en un set es lo mismo
    console.log(producto);
});

console.log(carrito);

//Eliminar del array los duplicados

const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);