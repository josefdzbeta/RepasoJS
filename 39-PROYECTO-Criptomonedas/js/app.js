const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

//Promise
const obtenerCriptomonedas = criptomonedas => new Promise((resolve) => {
    resolve(criptomonedas);
})
document.addEventListener('DOMContentLoaded', () =>{
    consultarCriptomonedas();
    formulario.addEventListener('submit',submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then( resultado =>{
            return obtenerCriptomonedas(resultado.Data);
        })
        .then(criptomonedas => {
            return selectCriptomonedas(criptomonedas);
        })
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const {Name, FullName} = cripto.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    });
}
function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value; //Los valores se pasan correctamente al objeto porque en el HTML ya están con el name correspondiente


}

function submitFormulario(e) {
    e.preventDefault();

    //Validar
    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    //Consultar API
    consultarApi();   

}

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.error');

    if(!  existeError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        //mensaje de error
        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
     
}

function consultarApi() {
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();
    fetch(url)
        .then(respuesta =>{
            return respuesta.json();
        })
        .then(cotizacion =>{
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML(cotizacion) {

    limpiarHTML();
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE,FROMSYMBOL} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es <span> ${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `
        Precio más alto del día <span>${HIGHDAY}</span>
    `;
    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `
        Precio más bajo del día <span>${LOWDAY}</span>
    `;
    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `
        Últimas 24 horas <span>${CHANGEPCT24HOUR}%</span>
    `;
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `
        Últimas 24 horas <span>${LASTUPDATE}</span>
    `;
    const monedaElegida = document.createElement('p');
    monedaElegida.classList.add('moneda');
    monedaElegida.innerHTML = `${FROMSYMBOL}`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
    resultado.appendChild(monedaElegida);
}

function limpiarHTML() {

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML();
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>

    `;
    resultado.appendChild(spinner);

}