//Explicit biding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Jose'
}
const musicaFavorita = ['Pop', 'Rap'];


//.call
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]) //.call trae el objeto de información, también, hay que indicarle cada elemento de forma individual
                                                                //Añadirle valores externos //Explicit binding

//.apply
persona.apply(informacion, musicaFavorita) //.Apply no necesita que le indiquemos los valores de forma individual

//.bind
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]); //bind crea una nueva función y hay que pasarle los elementos de manera similar a .call
nuevaFn();