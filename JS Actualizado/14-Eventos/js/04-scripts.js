const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    console.log(evento);
})
