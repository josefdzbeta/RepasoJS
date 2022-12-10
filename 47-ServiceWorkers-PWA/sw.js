//Para que una progressive web application se pueda instalar necesita:
//1 manifest válido
//2 dominio https o localhost
//3 tener registrado el evento de fetch

const nombreCache = 'apv-v1';
//Cachear archivos
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
    '/error.html'
];

//Una vez instalado el serviceWorker..
//Sólo se ejecuta una vez
self.addEventListener('install', (e) =>{
    console.log('Instalado el Service Worker');

    //Esperar hasta que se descarguen todos los archivos de cache
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache =>{
                console.log('cache');
                cache.addAll(archivos);
            })
    )


});

//Activar serviceWorker
self.addEventListener('activate', (e) =>{
    console.log('ServiceWorker Activado');
    e.waitUntil(
        caches.keys()
            .then( (keys) => {
                return Promise.all(
                    keys.filter( key => key !==nombreCache )
                        .map( key => caches.delete(key)) //Borra las versiones anteriores de la cache
                )
            })

    )
});

//Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', (e) =>{
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
            .catch( () => caches.match('/error.html'))
    )
});