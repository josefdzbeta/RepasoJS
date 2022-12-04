//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas{
    constructor() {
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];

    }
    eliminarCita(id){
        this.citas = this.citas.filter( cita => cita.id !== id) //Diferentes al id que estamos pasando
    }
    editarCita(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita) //Itera sobre todas las citas, verifica que la cita siendo editada y la cita actual tenga el mismo ID, en caso de que se cumpla la condición, reescribimos el objeto.
    }

}

class UI{
    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        //Agregar mensaje en caso de tipo error
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //Quitar alerta 
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    imprimirCitas({citas}){ //deestructuring

        this.limpiarHTML();

        citas.forEach(cita => {

            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder"> Propietario: </span> ${propietario}
            `;
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder"> Teléfono: </span> ${telefono}
            `;
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder"> Fecha: </span> ${fecha}
            `;
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder"> Hora: </span> ${hora}
            `;
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder"> Síntomas: </span> ${sintomas}
            `;

            //Botón para eliminar citas
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML= `Borrar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          `;

          //Añade un botón para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-info');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          `
          btnEditar.onclick = () =>{
            cargarEdicion(cita);
          }

            btnEliminar.onclick = () => {
                eliminarCita(id);
            }


            //Agregar los parrafos al div cita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while (contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

//Eventos
eventListeners();
function eventListeners() {

    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

//Objeto con la info de cada cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
};

function datosCita(e) {
    //Rellena los datos de citaObj
    citaObj[e.target.name] = e.target.value; //accedemos al valor de las propiedades

    // console.log(citaObj);
}

//valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
    e.preventDefault();

    //Extraer info del objeto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    //Validar
    if(Object.values(citaObj).includes('')){
        
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando){
        ui.imprimirAlerta('Editado correctamente');
        //Pasar el objeto de la cita a edición
        administrarCitas.editarCita({...citaObj})

        //Cambiar texto del botón al estado original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        //Quitar modo edición
        editando = false;

    }else{
        //Generar Id único
        citaObj.id = Date.now();

        //Creando una nueva cita
        administrarCitas.agregarCita({...citaObj}); //pasamos copia del objeto, no el objeto global entero

        //Mensaje
        ui.imprimirAlerta('Se creó correctamente');
    }

   

    //Reiniciar objeto para validación
    reiniciarObjeto();


    //Reiniciar formulario
    formulario.reset();

    //Mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas); //AdministrarCitas contiene el array con las citas
 }

 function reiniciarObjeto() {
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''

    // console.log(citaObj);
 }

 function eliminarCita(id) {
    //Eliminar cita
    administrarCitas.eliminarCita(id);

    //Mostrar mensaje
    ui.imprimirAlerta('Cita eliminada correctamente')

    ui.imprimirCitas(administrarCitas); //Pasamos todo el objeto porque aplicamos deestructuring en el parámetro

    
 }

 //Carga los datos y el modo editar
 function cargarEdicion(cita) {
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    //Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
    
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //cambiar texto del botón
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}