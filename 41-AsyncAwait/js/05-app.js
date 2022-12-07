//Async await con fetch api

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);


function obtenerDatos() {
    //Fetch con Promises
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
}

async function obtenerDatos() {
    //Fetch con async await
    
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}