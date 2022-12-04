function iniciarApp() {
    
    //Select dinámico
    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');

    if (selectCategorias) {
        
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }

    const modal = new bootstrap.Modal('#modal', {});


    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        fetch(url)
            .then(respuesta =>{
                return respuesta.json();
            })
            .then(resultado =>{
                return mostrarCategorias(resultado.categories); //obtenemos las categorías
            });
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach(categoria =>{

            const {strCategory} = categoria;
            
            const option = document.createElement('option');
            option.value = strCategory;
            option.textContent = strCategory;

            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(resultado => {
                console.log(resultado.meals);
                return mostrarRecetas(resultado.meals);
            });
    }
    function mostrarRecetas(recetas = []) {

        limpiarHTML(resultado);
        
        const heading = document.createElement('h2');
        heading.classList.add('text-center' , 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados:': 'No hay resultados' ;
        resultado.appendChild(heading);


        //Iterar en los resultados
        recetas.forEach(receta =>{
            const {idMeal, strMeal, strMealThumb} = receta;

            const recetaContenedor = document.createElement('div');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('div');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('img');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la Receta ${strMeal ?? receta.titulo} `;
            recetaImagen.src = strMealThumb ?? receta.img; //Si no existe, añade lo que está en localStorage // Nullish coalescing

            const recetaCardBody = document.createElement('div');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('h3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo; // Nullish coalescing 

            const recetaButton = document.createElement('button');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            // recetaButton.dataset.bsTarget = '#modal';
            // recetaButton.dataset.bsToggle = 'modal';
            recetaButton.onclick = function () {
                seleccionarReceta(idMeal ?? receta.id); //Para pasar parámetros debemos crear la función de esta manera
            };

            //Inyecar en el código HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);


            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);
        });
    }



    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(respuesta =>{
                return respuesta.json();
            })
            .then(resultado =>{
                mostrarRecetaModal(resultado.meals[0]);
            });
    }

    function mostrarRecetaModal(receta) {
        const {idMeal, strInstructions, strMeal, strMealThumb, strMeasure} = receta;

        //Añadir contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt=" receta ${strMeal}" />
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `;

        const listGroup = document.createElement('ul');
        listGroup.classList.add('list-group');

        //Mostrar ingredientes
        for (let i = 1; i <= 20; i++) {
            if (receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('li');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            }            
        }
        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        //Botones de cerrar y favorito
        const btnFavorito = document.createElement('button');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        //localStorage
        btnFavorito.onclick = function () {
            
            //Si existe el elemento en localStorage evita que se agregue 
            if (existeStorage(idMeal)) {
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente')
                return;
            }
            agregarFavorito({ //Pasar objeto
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            });
            btnFavorito.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado Correctamente')

        };

        const btnCerrar = document.createElement('button');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.onclick = function () {
            modal.hide();
        };

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);

        //Muestra el modal
        modal.show();
    }

    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; //En caso de que la expresión izquierda sea null, crea lo que está a la derecha (Nullish Coalescing)
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));

    }
    function eliminarFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id) //Obtiene todos menos el id que estamos pasando //filter method 
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    
    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; 
        return favoritos.some(favorito => favorito.id === id); //some method
    }
    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;

        toast.show();
    }
    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        console.log(favoritos);
        if(favoritos.length){
            mostrarRecetas(favoritos)

            return
        }
        //Si no hay nada en Favoritos
        const noFavoritos = document.createElement('p');
        noFavoritos.textContent = 'No hay favoritos aún';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos);
    }
    function limpiarHTML(selector) {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);