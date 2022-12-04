//Eventos para teclados

const busqueda = document.querySelector('.busqueda');

/*busqueda.addEventListener('keydown', () => {
    console.log('key down');
})

busqueda.addEventListener('keyup', () => {
    console.log('key up');
})
busqueda.addEventListener('blur', () => {
    console.log('evento blur');
})
busqueda.addEventListener('copy', () => {
    console.log('copy');
})
busqueda.addEventListener('paste', () => {
    console.log('paste');
})
busqueda.addEventListener('cut', () => {
    console.log('cut');
})
busqueda.addEventListener('input', (evento) => {
    console.log(evento.type); // tipo de evento
})
busqueda.addEventListener('input', (evento) => {
    console.log(evento.target.value); // valor del evento
})

busqueda.addEventListener('input', (evento) => {
    console.log(evento.target.value); // lo que el usuario está escribiendo
}) */

// Para validar
busqueda.addEventListener('input', (evento) => {
    if(evento.target.value === ''){
        console.log('falló la validación');
    }
});

