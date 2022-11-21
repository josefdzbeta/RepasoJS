localStorage.setItem('nombre', 'Jose'); //Local storage sólo guarda strings

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
};

const productoString = JSON.stringify(producto);
console.log(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));

