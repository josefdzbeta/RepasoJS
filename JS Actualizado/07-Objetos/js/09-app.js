'use strict'

const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}


//Congelar un objeto
Object.seal(producto)
// producto.imagen = 'imagen.jpg'
// Object.freeze(producto)

//freeze te deja el objeto cual está, y seal te permite cambiar el valor de las propiedades ya existentes pero no añadir o eliminar
console.log(producto);

console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

