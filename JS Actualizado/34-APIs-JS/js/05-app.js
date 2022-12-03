//Visibility state
document.addEventListener('visibilitychange', () =>{
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar la función para reproducir el vídeo');
    }else{
        console.log('Ejecutar la función para pausar el vídeo');
    }
});