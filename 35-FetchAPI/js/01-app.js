//Fetch API sólo puede leer textos, o JSON, no soporta XML

const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('event', obtenerDatos);

function obtenerDatos() {

    const url = 'data/datos.txt';
    //Con fetch puedes enviar o recibir datos
    fetch(url) //url
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status); //respuesta que obtenemos
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text();
            // return respuesta.json()
        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        });

}
//1. Queremos consultar url 
//2. Hacer fetch a la url
//3. entonces traéme la respuesta 
//4. y la respuesta la quiero como txt. 