//Async Await

function descargarClientes() {
    
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('el listado de clientes se descargo correctamente')
            }else{
                reject('error en la conexión')
            }
        }, 3000);
    })
}


//La función padre tiene que tener async, la función hijo await
//Async await
async function ejecutar() {
    
    try {
        //Asignar el valor dentro de una variable
        const respuesta = await descargarClientes();//Await detiene la ejecución del código hasta que se resuelve el promise
        console.log(2+2); //La siguiente línea de código no se ejecuta hasta que termine la anterior
        console.log(respuesta); //Al detectar un await y un reject, se salta estas líneas de código y va directamente al catch.



    } catch (error) {
        console.log(error);
    }

}

ejecutar();