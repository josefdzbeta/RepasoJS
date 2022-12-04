//Operador ternario

const autenticado = true;
const puedePagar = false;

console.log(autenticado ? 'si está autenticado' : 'no está autenticado');
console.log(autenticado ? 'si está autenticado' : null);
console.log(autenticado && puedePagar ? 'si está autenticado' : 'no está autenticado');
console.log(autenticado || puedePagar ? 'si está autenticado' : 'no está autenticado');

//operador ternario anidado

console.log(autenticado ? puedePagar ? 'Si está autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No no esta autenticado');

