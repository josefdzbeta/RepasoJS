const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre
//console.log(producto.nombre);

//console.log(nombre);

//Destructuring

//const { nombre } = producto
//const { precio } = producto
const { nombre, precio, disponible, noExiste } = producto
console.log(nombre);
console.log(precio);