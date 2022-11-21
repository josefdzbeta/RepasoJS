//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);


    //Muestra los cursos del localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    });

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = [];//Vaciamos el array de carrito

        limpiarHTML(); //Eliminamos todo el HTML
    });
}

//Funciones
function agregarCurso(e){
   
    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        // console.log(cursoSeleccionado);
    }
}

//Elimina un curso del carrito 
function eliminarCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        //Elimina elementos del array de artículosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
        console.log(articulosCarrito);

        carritoHTML(); //Iterar sobre el carrito y mostrar el html
    }
}
//Lee el contenido del html  y extrae la información del curso

function leerDatosCurso(curso){
    console.log(curso);
    
    //Crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    };
    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id ); //Some verifica si un elemento existe dentro de un array
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map((curso) =>{ //Map crea un nuevo array 
            if(curso.id === infoCurso.id){
                curso.cantidad ++;
                return curso; //Devuelve el objeto actualizado
            }else{

                return curso; // Devuelve los objetos que no son duplicados
            }
        } );
        articulosCarrito = [...cursos];
    }else {
        //Agregamos elemento al carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }

    console.log(articulosCarrito);

    //Imprimimos HTML en el carrito
    carritoHTML();
}

//Muestra el carrito de compras en el html

function carritoHTML(){

    //Limpiar el HTML por que el array del carrito sale duplicado en el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach((curso)=>{

        //Object deestructure
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML= `
            <td><img src="${imagen}" width="100"> </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;
        //Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    //Agregar carrito de compras al localStorage
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody

function limpiarHTML(){
    //Forma lenta de limpiar el HTML
    // contenedorCarrito.innerHTML = '';

    //Recordatorio: el while se ejecuta mientras la condición sea verdadera
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);    
    }
}
