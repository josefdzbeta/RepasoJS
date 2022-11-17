//getElementsByClassName

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen más de 1 vez devolverá múltiples elementos
const contenedores = document.getElementsByClassName('Contenedor');
console.log(contenedores);

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

