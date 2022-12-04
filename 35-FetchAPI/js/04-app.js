//Respuesta de APIS con FETCH

const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta =>{
            return respuesta.json();
        })
        .then(resultado =>{
            return mostrarHTML(resultado);
        });
}
function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html= '';
    datos.forEach(perfil => {
        const {author, post_url} = perfil;

        html +=`
            <p>Autor ${author}</p>
            <a href="${post_url} target="_blank">Ver Imagen</a>
        `;
    });
    contenido.innerHTML = html;
}