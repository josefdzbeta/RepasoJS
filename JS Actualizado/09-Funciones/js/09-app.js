//Funciones en Objetos

const reproductor = {
    reproducir: function (id) {
        
        console.log(`reproduciendo cancion ${id}`);

    },
    pausar: function(){
        console.log(`pausar...`);
    },
    borrar: function (id) {
        console.log(`borrando cancion ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`creando playlist ${nombre}`);
    }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Existos España')
