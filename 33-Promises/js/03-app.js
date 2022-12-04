//Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    
    const descuento = true;

    if(descuento){
        resolve('descuento aplicado');
    }else{
        reject('no se pudo aplicar el descuento');
    }

});

aplicarDescuento
    //Si se cumple
    .then(resultado =>{
        descuento(mensaje)/*console.log(resultado)*/; 
    })
    //Si falla
    .catch(error => {
        console.log(error);
    });

    function descuento(mensaje) {
        console.log(mensaje);
    }




//Hay 3 valores posibles en los promises
//Fulfilled - el Promise se cumplió
//Rejected - no se cumplió
//Pending - No se ha cumpliado y tampoco fue rechazado