const encabezado = document.querySelector('.contenido-hero h1').textContent
console.log(encabezado);


// console.log(encabezado.innerText); //trae el texto - no encontrará un texto que esté oculto (css: hidden visibility)
// console.log(encabezado.textContent); //trae el texto
// console.log(encabezado.innerHTML); //trae el html

// const nuevoHeading = 'nuevo heading'
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'