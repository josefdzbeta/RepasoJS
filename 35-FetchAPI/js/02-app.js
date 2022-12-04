//Fetch API con JSON

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
   
    const url = 'data/empleado.json';
    fetch(url)
        .then( respuesta => {
            return respuesta.json();

        })
        .then(resultado =>{
            return mostrarHTML(resultado);
        });


}

function mostrarHTML({empresa, id, nombre, trabajo}) { //object deestructuring 
    
    
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}