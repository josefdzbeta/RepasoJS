//Como crear un iterador

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined ;

            return {
                fin,
                valor
            };
        }
    };
}

const carrito = ['Producto 1','Producto 2','Producto 3'];

//utilizar el iterador
const recorrerCarrito = crearIterador(carrito);



console.log(recorrerCarrito.siguiente()); // Valor 1
console.log(recorrerCarrito.siguiente()); //Valor 2
console.log(recorrerCarrito.siguiente()); //Valor 3
console.log(recorrerCarrito.siguiente()); // fin = true && undefined