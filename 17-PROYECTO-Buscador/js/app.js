//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};

//Eventos
document.addEventListener('DOMContentLoaded', () => {

    mostrarCoches(coches); // Muestra los coches al cargar

    //Llena las opciones de años
    llenarSelect();

});

//Event listener para los select de búsqueda

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarCoche();
});
year.addEventListener('change', (e) => {

    datosBusqueda.year = parseInt(e.target.value); //Los datos del formulario vienen en formato string
    filtrarCoche();

});
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = parseInt(e.target.value);

    filtrarCoche();
});
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarCoche();

});
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarCoche();

});
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarCoche();

});
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarCoche();

});

//Funciones
function mostrarCoches(coches) {

    limpiarHTML(); //Elimina el HTML Previo 
    coches.forEach( coche =>{

        //deestructuring
        const {marca, modelo, year, puertas, transmision, precio, color} = coche;
        const cocheHTML = document.createElement('p');

        cocheHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Precio: ${precio} - Color ${color}
        `;

        //Insertar en el HTML
        resultado.appendChild(cocheHTML);
    });
}
//Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect() {

    for (let i = max; i >= min ; i--) {

       const opcion = document.createElement('option');
       opcion.value = i;
       opcion.textContent = i;

       year.appendChild(opcion); //Agrega las opciones de año al select
    
    }

}

//Funcion que filtra en base a la búsqueda

function filtrarCoche() {

    //Función de alto nivel (función que toma otra función)
    const resultado = coches.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);  //Chaining

    // console.log(resultado);
    
    if(resultado.length){
        mostrarCoches(resultado);
    }else{
        noResultado();
    }
}
function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta otra búsqueda';
    resultado.appendChild(noResultado);
}
function filtrarMarca(coche) {
    const {marca} = datosBusqueda;

    if(marca){
        return coche.marca === marca;
    }
    return coche;
    // console.log(coche);
}

function filtrarYear(coche) {
    const {year} = datosBusqueda;

    if(year){
        return coche.year === year; 
    }
    return coche;
}

function filtrarMinimo(coche) {
    const {minimo} = datosBusqueda;

    if(minimo){
        return coche.precio >= minimo; 
    }
    return coche;
}
function filtrarMaximo(coche) {
    const {maximo} = datosBusqueda;

    if(maximo){
        return coche.precio <= maximo; 
    }
    return coche;
}

function filtrarPuertas(coche) {
    const {puertas} = datosBusqueda;

    if(puertas){
        return coche.puertas === puertas; 
    }
    return coche;
}
function filtrarTransmision(coche) {
    const {transmision} = datosBusqueda;

    if(transmision){
        return coche.transmision === transmision; 
    }
    return coche;
}
function filtrarColor(coche) {
    const { color } = datosBusqueda;

    if(color){
        return coche.color === color; 
    }
    return coche;
}