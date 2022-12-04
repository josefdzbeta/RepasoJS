//querySelectorAll - devuelve todos los elementos que cumplan la condición del selector

const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('#formulario'); //No valida si usamos buenas o malas prácticas
console.log(formulario);

//Si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);