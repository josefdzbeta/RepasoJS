//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);

}


//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
        this.calcularRestante();
    }

    calcularRestante () {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0); //Itera sobre todo el array 
        this.restante = this.presupuesto - gastado;

        
        console.log(this.restante);
    }
    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id ); //Trae todos excepto el id que queremos eliminar
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad) {

        //Extraemos el valor
        const { presupuesto, restante } = cantidad;

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {

        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje 
        divMensaje.textContent = mensaje;

        //Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //Quitar el HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos){

        this.limpiarHTML(); //Elimina el html previo

        //Iterar sobre gastos
        gastos.forEach( gasto => {
            const {cantidad, nombre, id} = gasto;

            //Crear li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'listo-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id);
            nuevoGasto.dataset.id = id; //Nueva versión de sintaxis de JS // dataset.id = data-id (atributo HTML) // dataset.pepito = data-pepito

            //Agregar HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`;

            //Boton borrar gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            };
            btnBorrar.classList.add('btn', 'btn-danger', 'btn-borrar');

            nuevoGasto.appendChild(btnBorrar);

            //Añadir al html
            gastoListado.appendChild(nuevoGasto);

        });
        
    }
    limpiarHTML() {
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestObj){
        const {presupuesto, restante} = presupuestObj;
        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if((presupuesto / 4) > restante){

            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');

        } else if ((presupuesto / 2) > restante){

            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');

        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }
        //Si el total es <0
        if(restante <= 0){
            ui.imprimirAlerta('el presupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

//Instanciar
const ui = new UI();


let presupuesto;

//Funciones

function preguntarPresupuesto() {

    const presupuestoUsuario = prompt('Cuál es tu presupuesto?');

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    //Presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);

    // console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}

//Añade gastos
function agregarGasto(e) {
    e.preventDefault();

    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //Validar

    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('ambos campos son obligatorios', 'error');

        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no válida', 'error');

        return;
    }

    //Generar un objeto con el gasto
    //Contrario object deestructuring
    const gasto = { nombre, cantidad, id: Date.now() }; //Esta sintaxis une nombre y cantidad a gasto, de lo contrario, extraería nombre y cantidad de gasto

    //Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);
    
    //Mensaje correcto
    ui.imprimirAlerta('Gasto añadido correctamente'); // No introducimos de que tipo es porque sólo evaluamos si es de tipo error

    //Imprimir los gastos
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
    //Reiniciar formulario
    formulario.reset();
}

function eliminarGasto(id) {
    //Elimina los gastos del HTML
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);
    
    ui.comprobarPresupuesto(presupuesto);
}
