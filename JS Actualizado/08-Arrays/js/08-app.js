const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 400,
    disponible: true
}
//Destructuring con objetos
const {nombre} = producto

// console.log(nombre);

//Destructuring con array
const numeros = [10,20,30,40,50]

// const [primero, segundo, tercero] = numeros
// console.log(tercero);

// const [, , tercero] = numeros
// const [, , tercero] = numeros

//Añadir los últimos valores en un array en la tercera posición
const [primero, segundo, ...tercero] = numeros


console.log(tercero);
