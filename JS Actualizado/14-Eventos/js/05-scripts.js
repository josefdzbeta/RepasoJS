//Eventos Scroll

// window.addEventListener('scroll', () =>{
//     // console.log('scrolling');
//     const scrollPX = window.scrollY

//     console.log(scrollPX);
// })

window.addEventListener('scroll', () =>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 100){
        console.log('el elemento ya está visible');
    }else{
        console.log('da más scroll');
    }
});