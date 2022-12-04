//Traversing

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados los elementos
console.log(navegacion.children); //Muestra realmente los elementos html



// console.log(navegacion.children[1].nodeName); -- A
// console.log(navegacion.children[1].nodeType); -- 1

const card = document.querySelector('.card');

// console.log(card.children[1].children);
// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent = 'Nuevo Heading desde traversing el dom'

// card.children[0].src = 'img/hacer3.jpg'
// console.log(card.children[0]);


//Traversing de hijo al padre

console.log(card.parentNode);
console.log(card.parentElement.parentElement);

//Traversing de hermanos

console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);