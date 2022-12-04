//Intersection observer nos permite identificar cuando un elemento está visible //Es una API nativa de JavaScript

document.addEventListener('DOMContentLoaded', () =>{

    const observer = new IntersectionObserver( (entries) => {
        console.log(entries[0]); //tienes que elegir el elemento a revisar

        if(entries[0].isIntersecting){
            console.log('ya está visible');
        }
    });
    
    observer.observe(document.querySelector('.premium'));

});