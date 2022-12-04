//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Event listeners
eventListeners();
function eventListeners() {

    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', submitTweet);

    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []; //Busca en localStorage los tweets, si no existen, crea un array vacío

        crearHTML();
    });
}



//Funciones

function submitTweet(e) {

    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    
    //validación
    if(tweet === ''){
        mostrarError('El tweet no puede estar vacío');
        return; //Evitar que se ejecuten más líneas de código
    }

    const tweetObj = {
        id: Date.now(),
        // tweet: tweet Si llave y valor son iguales, se puede dejar solamente 1
        tweet
    };

    
   //Añadir al array de tweets
    tweets = [...tweets, tweetObj];

    //Crear html una vez añadido los tweets
    crearHTML();

    //reiniciar formulario
    formulario.reset();
    console.log(tweets);
}

function mostrarError(error) {

    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove(); //Eliminar mensaje de error pasado los 3 segundos
    }, 3000);
}

//Muestra el listado de tweets
function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => { 
            //Boton de eliminar

            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //Funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };
            
            
            //Crear html
            const li = document.createElement('li');
            
            //Añadir el texto
            li.innerText = tweet.tweet;
            
            //Asignar boton eliminar
            li.appendChild(btnEliminar);

            //insertar en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}
//Añade los tweets actuales al localStorage

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));


}

//Eliminar tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}

//Limpiar HTML
function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
