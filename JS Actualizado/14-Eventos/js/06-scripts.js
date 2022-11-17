//Event bubbling

//Event bubbling es cuando presionas en un evento y ese evento se propaga por muchos otros lugares dando resultados que no son los esperados
//Ej 3 divs, uno dentro de otro, cuando pulsas en uno que está dentro se disparan el resto de eventos
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en card');
});
infoDiv.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en info');
});
tituloDiv.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en titulo');
});


