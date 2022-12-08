window.onload = () =>{
    console.log('Ventana Lista');
}

window.nombre = 'Monitor 20 pulgadas';
const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function () {
        return `El producto: ${self.nombre} tiene un precio de ${this.precio}`

    }
}
console.log(producto.mostrarInfo());