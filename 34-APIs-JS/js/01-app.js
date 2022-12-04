const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    //Preguntar por notificaciones al usuario
    Notification
        .requestPermission()
            .then((resultado)=>{
                console.log('el resultado es ', resultado);
            });
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click',  () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('esta es la notificación', {
            icon: 'img/mac-os.png',
            body: 'JavaScript Mola'
        });
        notificacion.onclick = function () {
            window.open('https://www.theverge.com');
        };
    }
    
});