//Obtener datos de localStorage.

const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(productoJSON);
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));

const mesesArray = JSON.parse(meses);
console.log(mesesArray);