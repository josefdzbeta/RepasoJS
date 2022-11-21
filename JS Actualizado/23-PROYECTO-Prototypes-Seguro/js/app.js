//Constructores

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza cotización con los datos
Seguro.prototype.cotizarSeguro = function () {
    
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;

        case '2':
            cantidad = base * 1.05;
            break;

        case '3':
            cantidad = base * 1.35;    
            break;
    
        default:
            break;
    }
    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;

    //Cada año la diferencia es mayor, el precio se reduce en un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100; 

    /*Si el seguro es básico, se multiplica por un 30% más
    Si el seguro es completo, se multiplica por un 50% más*/

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }
    return cantidad;

};
 
function UI() {}

UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector('#year');

    //Select dinámico
    for (let i = max; i > min; i--) {
        let option =  document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

//Muestra Alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //insertar en HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado')); //1. Nuevo nodo 2. Nodo donde quieres insertarlo

    setTimeout(() => {
        div.remove();
    }, 3000);

};

UI.prototype.mostrarResultado = (total, seguro) => {
    //Crear resultado
    const {marca, year, tipo } = seguro;

    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';

            break;
        case '3':
            textoMarca = 'Europeo';

            break;

        default:
            break;
    }

    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header"> Resumen: </p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${textoMarca}</span>  </p>
        <p class="font-bold"> Año: <span class="font-normal"> ${year}</span>  </p>
        <p class="font-bold"> Tipo: <span class="font-normal capitalize"> ${tipo}</span>  </p>
        <p class="font-bold"> Total: <span class="font-normal">$ ${total}</span>  </p>

    `;

    const resultadoDiv = document.querySelector('#resultado');
    
    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none'; // borrar el spinner 
        resultadoDiv.appendChild(div); //se muestra el resultado
    }, 3000);

};

//instanciar Ui
const ui = new UI();
console.log(ui);


document.addEventListener('DOMContentLoaded',  () => {
    
    ui.llenarOpciones(); //Llena el select con los años
});

eventListeners();

function eventListeners() {
    
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
    
}

function cotizarSeguro(e) {
    e.preventDefault();

    //Leer marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer año seleccionada
    const year = document.querySelector('#year').value;

    //Leer cobertura seleccionada
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'exito');
    //Ocultar cotizaciones previas
    const resultados = document.querySelector('#resultado div'); //seleccionar div dentro de resultado
    if (resultados != null) {
        resultados.remove();
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    //Utilizar prototype que va a cotizar
    ui.mostrarResultado(total,seguro);
}