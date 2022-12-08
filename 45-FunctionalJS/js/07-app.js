//Funciones que devuelven una función

const obtenerCliente = () => () => console.log('Jose Angel');

const fn = obtenerCliente();

fn();