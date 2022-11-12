// .find te crea un nuevo array basado en la condición que estás buscando

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Con un for each
let resultado = ''
carrito.forEach((producto, index)=>{
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
})
console.log(resultado);



//Con .find
//Solo devuelve la primera condición que se cumpla
const resultado2 = carrito.find((producto) => {
  return  producto.precio === 100
})

console.log(resultado2);