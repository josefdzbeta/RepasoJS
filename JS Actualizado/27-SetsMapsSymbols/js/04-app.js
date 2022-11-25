//WeakMaps
//WeakMaps son los menos utilizados //Sirven para mantener una serie de datos privados

const producto = {
    idProducto: 10
};

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor'); //Solo funciona con objetos

console.log(weakmap.has(producto)); //comprobar si existe el objeto dentro del weakmap
console.log(weakmap.get(producto)); //obtener si existe el objeto dentro del weakmap
console.log(weakmap.size(producto)); //no funciona
console.log(weakmap.delete(producto)); //borrar el objeto




console.log(weakmap); //muetra todos los valores, sin embargo no pueden ser accedidos desde .get o .has //No guardes información relevante 🤫

