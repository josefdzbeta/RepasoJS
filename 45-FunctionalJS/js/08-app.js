//Closure (acceder a un valor interno desde el exterior)
const obtenerCliente = () =>{
    const nombre ='Jose';

    function mostrarNombre() {
        console.log(nombre);
    }
    return mostrarNombre;
}

const cliente = obtenerCliente();
cliente();