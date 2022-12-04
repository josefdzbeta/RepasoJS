//Saber si tenemos conexión o no a internet
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);


function actualizarEstado() {
    if (navigator.onLine) {
        console.log('estás online');
    }else{
        console.log('no estás conectado..');
    }
}

