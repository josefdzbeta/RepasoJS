//Event bubbling con Delegation

cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('titulo')){
        console.log('hiciste click en titulo');    
    }
    if(e.target.classList.contains('card')){
        console.log('hiciste click en titulo');    

    }
    if(e.target.classList.contains('precio')){
        console.log('hiciste click en titulo');    

    }
})