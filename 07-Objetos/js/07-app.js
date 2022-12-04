const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true
};

producto.disponible = false;

delete producto.precio;

console.log(producto);