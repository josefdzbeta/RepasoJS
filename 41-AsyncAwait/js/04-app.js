
function descargarNuevosClientes() {
    return new Promise((resolve) => {
        console.log('descargando clientes');

        setTimeout(() => {
            resolve('los clientes fueron descargados')
        }, 5000);
    })
}


function descargarNuevosPedidos() {
    return new Promise((resolve) => {
        console.log('descargando pedidos');

        setTimeout(() => {
            resolve('los pedidos fueron descargados')
        }, 3000);
    })
}

const app = async ()=>{
    try {
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);
                                                                /*De este no se ejecutan las funciones al mismo tiempo*/
        // const pedidos = await descargarNuevosPedidos();
        // console.log(pedidos);

        /*Utilizar esta sintaxis para ejecutar 2 o más funciones, siempre que estas sean independientes (que no dependan una de la otra)*/
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]) /*De esta manera si*/
        console.log(respuesta[0]);
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
}


