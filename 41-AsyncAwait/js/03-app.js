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



//Async await
//function expression
const ejecutar = async ()=> {
    
    try {
        const respuesta = await descargarClientes();
        console.log(2+2); 
        console.log(respuesta);



    } catch (error) {
        console.log(error);
    }

}

ejecutar();