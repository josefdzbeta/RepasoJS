//Crear html desde JavaScript

const enlace = document.createElement('a');

//Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

//Añadiendo href
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;

console.log(enlace);

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//Añadiendo enlace a la navegacion
// navegacion.appendChild(enlace)
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    console.log('hola');
}

//Crear un card de forma dinámica
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';

//Crear el card 
const card = document.createElement('div');
card.classList.add('card');



//Asignar la imagen
card.appendChild(imagen);

//Asignar la info
card.appendChild(info);

//Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

console.log(imagen);
console.log(info);
