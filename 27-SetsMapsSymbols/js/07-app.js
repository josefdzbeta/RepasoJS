//Un generador es una funcion que retorna un iterador

function *crearGenerador() {
    //Elementos estáticos
    
    yield 1; //Valores que se puede iterar
    yield 'Jose';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador); //suspended
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done); //Cada vez que escribas .next irá al próximo yield
console.log(iterador.next());
console.log(iterador.next()); //closed


//Crear generador para carrito de compras

function *generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        
        yield carrito[i];
        
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3'];

const iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());