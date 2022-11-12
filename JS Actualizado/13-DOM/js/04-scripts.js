//QuerySelector

//QuerySelector actúa de manera similar a getElementsById - Te devuelve un sólo valor pero puedes seleccionar clases 

const card = document.querySelector('.card') // Sólo devuelve el primer elemento que encuentra
console.log(card);

//Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info') //info es hijo de premium
console.log(info);

//Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard);

//Seleccionar formulario
const formulario = document.querySelector('#formulario')
console.log(formulario);

//Seleccionar elementos de navegacion o si una clase no existe
const navegacion = document.querySelector('nav')
console.log(navegacion)




