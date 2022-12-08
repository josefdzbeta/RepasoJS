//Hoisting
//Bien
obtenerCliente('jose')
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}


//Error
obtenerCliente2('Angel')
const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
    
}