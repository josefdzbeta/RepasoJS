//Fetch API Arrays

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            //return console.log(resultado);
            return mostrarHTML(resultado);
        });
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html +=`
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });
    contenido.innerHTML = html;
}