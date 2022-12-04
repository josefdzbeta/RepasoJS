const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true
};

//Agregar nuevas propiedades
producto.imagen = 'Imagen.jpg';

//Para eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);