document.addEventListener('DOMContentLoaded', function () {
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    };
    console.log(email);


    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();

        resetFormulario();
    });
    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500','text-white','p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'uppercase', 'text-sm');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }
   
    function validar(e){
        //Eliminamos espacios en blanco de los inputs y comprobamos si están vacíos
        if(e.target.value.trim() === ''){

            // Pasamos mensaje e input de referencia para hacer appendchild del mensaje
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail(); 
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar valores del formulario
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail();


    }

    function mostrarAlerta(mensaje, referencia){
    
        limpiarAlerta(referencia);

        //Gemerar alerta HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white', 'p-2', 'text-center');

        //inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //Comprueba si existe ya un mensaje de error
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    
    }
    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        const resultado = regex.test(email);
        return resultado;
        
    }

    function comprobarEmail() {
        console.log(email);
        if(Object.values(email).includes('')){

            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;

            return;
        }
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
            
        
    }

    function resetFormulario() {
         //Reiniciar el objeto
         email.email ='';
         email.mensaje ='';
         email.asunto ='';
 
         formulario.reset();
         comprobarEmail();
    }
});