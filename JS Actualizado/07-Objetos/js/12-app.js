//Object literal
const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
};

//Object Constructor
//Una vez creado el producto, queremos que los valores que le pasamos se asociones a las propiedades, por eso utilizamos this
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Television', 100);
console.log(producto3);

