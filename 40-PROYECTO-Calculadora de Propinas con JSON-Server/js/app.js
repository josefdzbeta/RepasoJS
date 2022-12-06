let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Validar
    const camposVacios = [mesa, hora].some(campo => campo ===''); //iteramos sobre mesa y hora, si hay alguna variable vacía, validamos 

    if(camposVacios){
        //Verificar si ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');
        if(!existeAlerta){
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;
        
    }

    //Asignar datos del formulario al cliente
    cliente = {...cliente, mesa, hora}

    //Ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();
    
    //Mostrar secciones
    mostrarSecciones();

    //Obtener platos de la API de Json-Server
    obtenerPlatos();
    
}

function mostrarSecciones(){
        
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach((seccion) =>{
        seccion.classList.remove('d-none');
    });

}

function obtenerPlatos() {
    const url = 'http://localhost:4000/platos';

    fetch(url)
        .then((respuesta) =>{
            return respuesta.json();
        })
        .then((resultado) =>{
            return mostrarPlatos(resultado);
        })
        .catch( error =>{
            console.log(error);
        })
}

function mostrarPlatos(platos) {
    const contenido = document.querySelector('#platos .contenido');

    platos.forEach((plato) =>{
        const {nombre, precio, categoria, id} = plato;

        const row = document.createElement('div');
        row.classList.add('row', 'border-top');

        const nombrePlato = document.createElement('div');
        nombrePlato.classList.add('col-md-4', 'py-3');
        nombrePlato.textContent = nombre;

        const precioPlato = document.createElement('div');
        precioPlato.classList.add('col-md-6', 'fw-bold', 'py-3');
        precioPlato.textContent = `$${precio}`;

        const categoriaPlato = document.createElement('div');
        categoriaPlato.classList.add('cold-md-3', 'py-3');
        categoriaPlato.textContent = categorias[categoria]; //Asignamos valores del objeto categorias

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.classList.add('form-control');

        //Función para detectar cantidad y plato que se está agregando
        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value);

            agregarPlato({...plato, cantidad}); //Unimos plato y cantidad
        };

        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2', 'py-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombrePlato);
        row.appendChild(precioPlato);
        row.appendChild(agregar);
        row.appendChild(categoriaPlato);

        contenido.appendChild(row);
    });
}

function agregarPlato(producto) {

    //Extraer datos
    const { pedido } = cliente;
    //Revisar que la cantidad sea > 0

    if (producto.cantidad > 0) {

        //Comprobar si el elemento ya existe en el array
        if (pedido.some(elemento => elemento.id === producto.id)) {

            //El elemento ya existe, Actualizar cantidad
            const pedidoActualizado = pedido.map(elemento => {
                if (elemento.id === elemento.id) {
                    elemento.cantidad = producto.cantidad;
                }
                return elemento;
            });
            //Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        } else {
            //El elemento no existe, se añade al array de pedido
            cliente.pedido = [...pedido, producto];
        }

    }else{

        //Eliminar elemento por id
        //Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter(elemento => elemento.id !== producto.id) //Devolver los valores diferentes al elemento que estoy modificando con un 0

        cliente.pedido = resultado;
    }
    
    //Limpiar el código HTML
    limpiarHTML();

    if(cliente.pedido.length){ 
        //Mostrar resumen
        actualizarResumen()

    }else{ //Si el array de pedidos está vacío 
        mensajePedidoVacio();
    }
   

}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');
    
    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    //Mesa Info
    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');
    mesa.appendChild(mesaSpan);


    //Hora info
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');
    hora.appendChild(horaSpan)

    //Título
    const heading = document.createElement('h3');
    heading.textContent = 'Platos consumidos';
    heading.classList.add('my-4', 'text-center');

    //Iterar sobre el array de pedidos
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach((articulo) =>{
        const {nombre, precio, cantidad, id} = articulo;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('h4');
        nombreEl.classList.add('my-4', 'text-center')
        nombreEl.textContent = nombre;

        //Cantidad del articulo
        const cantidadEl = document.createElement('p');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: '
        
        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        //Precio del articulo
        const precioEl = document.createElement('p');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: '

        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;

        //Subtotal del articulo
        const subtotalEl = document.createElement('p');
        subtotalEl.classList.add('fw-bold');
        subtotalEl.textContent = 'Subtotal: '

        const subtotalValor = document.createElement('span');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio,cantidad);

        //Boton para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar del Pedido'

        //Función para eliminar elemento del pedido
        btnEliminar.onclick = function () {
            eliminarProducto(id);
        } 

        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        subtotalEl.appendChild(subtotalValor);

        //Agregar elementos al li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);
        

        //Agregar lista al grupo principal
        grupo.appendChild(lista)
        
    })

    //Añadir al contenido
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    //Mostrar formulario de propinas
    formularioPropinas();

}

function calcularSubtotal(precio,cantidad) {
    return(`$ ${precio*cantidad}`);
}

function eliminarProducto(id) {
    const {pedido} = cliente;

    //Eliminar elemento por id (para que no se me olvide)
    const resultado = pedido.filter(elemento => elemento.id !== id) 
    cliente.pedido = [...resultado];

    //Limpiar el código HTML
    limpiarHTML();

    if(cliente.pedido.length){ 
        //Mostrar resumen
        actualizarResumen()

    }else{ //Si el array de pedidos está vacío 
        mensajePedidoVacio();
    }

   //Reiniciar inputs a 0
   const productoEliminado = `#producto-${id}`;
   const inputEliminado = document.querySelector(productoEliminado);
   inputEliminado.value = 0;
}

function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';
    
    contenido.appendChild(texto);
}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6','formulario');

    const divFormulario = document.createElement('div');
    divFormulario.classList.add('py-2', 'card', 'px-3', 'shadow');


    const heading = document.createElement('h3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'Propina';

    ////////////////////////////////////////////////////////
    //Radio Button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    ////////////////////////////////////////////////////////
    //Radio Button 15%
    const radio15 = document.createElement('input');
    radio15.type = 'radio';
    radio15.name = 'propina';
    radio15.value = '15';
    radio15.classList.add('form-check-input');
    radio15.onclick = calcularPropina;

    const radio15Label = document.createElement('label');
    radio15Label.textContent = '15%';
    radio15Label.classList.add('form-check-label');

    const radio15Div = document.createElement('div');
    radio15Div.classList.add('form-check');

    radio15Div.appendChild(radio15);
    radio15Div.appendChild(radio15Label);

    ////////////////////////////////////////////////////////
    //Radio Button 20%
    const radio20 = document.createElement('input');
    radio20.type = 'radio';
    radio20.name = 'propina';
    radio20.value = '20';
    radio20.classList.add('form-check-input');
    radio20.onclick = calcularPropina;

    const radio20Label = document.createElement('label');
    radio20Label.textContent = '20%';
    radio20Label.classList.add('form-check-label');

    const radio20Div = document.createElement('div');
    radio20Div.classList.add('form-check');

    radio20Div.appendChild(radio20);
    radio20Div.appendChild(radio20Label);

    ////////////////////////////////////////////////////////

    //Añadir al div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio15Div);
    divFormulario.appendChild(radio20Div);
    
    //Añadir al formulario
    formulario.appendChild(divFormulario)
    contenido.appendChild(formulario);


}

function calcularPropina() {

    const {pedido} = cliente;
    let subtotal = 0

    //Calcular subtotal a pagar
    pedido.forEach(elemento =>{
        subtotal += elemento.cantidad * elemento.precio;
    })

    //Obtener radio button seleccionado
    const propinaSeleccionada = parseInt(document.querySelector('[name="propina"]:checked').value);

    //Calcular propina
    const propina = ((subtotal * propinaSeleccionada) / 100);

    console.log(propina);

    //Calcular total a pagar
    const total = subtotal + propina;
    
    mostrarTotalHTML(subtotal, total, propina);

}

function mostrarTotalHTML(subtotal, total, propina) {

    const divTotales = document.createElement('div');
    divTotales.classList.add('total-pagar', 'my-5');

    //////////////////////////////////////////////////////////////
    //Subtotal
    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subtotalParrafo.textContent = 'Subtotal Consumo: ';

    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);

    //////////////////////////////////////////////////////////////
    //propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);
    //////////////////////////////////////////////////////////////
    //total
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = 'Total:';

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);
    //////////////////////////////////////////////////////////////

    //Eliminar el último resultado
    const totalPagarDiv = document.querySelector('.total-pagar');
    if(totalPagarDiv){
        totalPagarDiv.remove();
    }

    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario > div'); //seleccionar primer div
    formulario.appendChild(divTotales);
    
}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');

    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild)
    }
}

