//Declarar las variables de forma que no puedan ser utilizadas en los otros archivos
(function () {

    let DB;
    const listadoClientes = document.querySelector('#listado-clientes');


    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        if(window.indexedDB.open('crm', 2)){
            obtenerCliente();
        }

        listadoClientes.addEventListener('click', eliminarRegistro);
    });


    //Crea la base de datos de indexDB
    function crearDB() {
        //Abrir conexión
        const crearDB = window.indexedDB.open('crm', 2);

        crearDB.onerror = function () {
            console.log('hubo un error');
        };

        crearDB.onsuccess = function () {
            //Si la base de datos se crea correctamente se asigna a la variable DB
            DB = crearDB.result;
        };


        //configuracion DB
        crearDB.onupgradeneeded = function (e) {
            //Guardamos el resultado cuando se ejecuta la función y utilizamos objectStore
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true});

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('DB Lista y Creada');

        };


    }

    function obtenerCliente() {
        const abrirConexion = window.indexedDB.open('crm', 2);

        abrirConexion.onerror = function () {
            console.log('hubo un error');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function (e) {
                const cursor = e.target.result;

                if(cursor){
                    const {nombre, empresa, email, telefono, id} = cursor.value;

                    listadoClientes.innerHTML += `
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                            </td>
                        </tr>`;
                    cursor.continue();

                }else{
                    console.log('no hay registros');
                }
            };
        };
    }

    function eliminarRegistro(e) {
        if(e.target.classList.contains('eliminar')){
            const idEliminar = Number(e.target.dataset.cliente);
            
            const confirmar = confirm('Desear eliminar este cliente?');

            if(confirmar){
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idEliminar);

                transaction.oncomplete = function () {
                    console.log('Eliminando');
                    e.target.parentElement.parentElement.remove();
                };
                transaction.onerror = function () {
                    console.log('Hubo un error');
                };
            }
        }
    }



})();
