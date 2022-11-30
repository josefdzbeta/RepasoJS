//IndexDB es una api para almacenar grandes cantidades de datos estructurados
//A diferencia de LocalStorage, puede almacenar cualquier tipo de dato soportado por JavaScript //LocalStorage can only store string data for its keys and values.
//LocalStorage límite 5mb, IndexDB no tiene límite pero si preguntará por permisos al usuario cuando los archivos sean más de 50mb
//Los datos de IndexDB siguen siendo visisbles, no guardes información confidencial 🫣

let DB;

document.addEventListener('DOMContentLoaded',() =>{
    crearDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crearDB() {
    //Crear base de datos 1.0
    let crmDB = window.indexedDB.open('crm', 1); //Asignar nombre como string y versión

    //Si hay un error
    crmDB.onerror = function () {
        console.log('Error al crear base de datos');
    };

    //Si se hizo bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada');

        DB = crmDB.result;
    };

    //Configuración de la base de Datos
    // crmDB.onupgradeneeded = function () {
    //     console.log('Este método se ejecuta solamente una vez');
    // };

    crmDB.onupgradeneeded = function (e) {
        // console.log(e.target.result);
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        //Definir las columnas
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});


        console.log('columnas creadas');
    };
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function () {
        console.log('Transaccion completada');
    };

    transaction.onerror = function () {
        console.log('Hubo un error en la transacción');
    };

    const objectStore = transaction.objectStore('crm');
    const nuevoCliente = {
        telefono: 123123123,
        nombre: 'Jose',
        email: 'correo@correo.com'
    };

    const peticion = objectStore.add(nuevoCliente); //para actualizar .put, para borrar .delete
    console.log(peticion);
}