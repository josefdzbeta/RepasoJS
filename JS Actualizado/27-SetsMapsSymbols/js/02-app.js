//WeakSet

const weakset = new WeakSet();

//A diferencia del set, es que al set le puedes pasar cualquier valor, en el weakset sólamente le puedes pasar objetos, no se les puede saber el .size y tampoco son iterables.

const cliente = {
    nombre: 'jose',
    saldo: 100000
};

// const nombre = 'Jose';

weakset.add(cliente);

// weakset.add(nombre); //Error
console.log(weakset.has(cliente)); //true
console.log(weakset.has('nombre')); //false
console.log(weakset.delete(cliente));

console.log(weakset.size); //no existe

console.log(weakset);