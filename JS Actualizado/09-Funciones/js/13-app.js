//Arrow functions en Objetos

const reproductor = {
    cancion: '',
    reproducir: id =>  console.log(`reproduciendo cancion ${id}`),
    pausar: () => console.log(`pausar...`),
    borrar: (id) => console.log(`borrando cancion ${id}`),
    crearPlaylist: (nombre) => console.log(`creando playlist ${nombre}`),
    reproducirPlaylist: (nombre) => console.log(`reproduciendo playlist ${nombre}`),
    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo canción `);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman'
reproductor.obtenerCancion()

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Existos España')
reproductor.reproducirPlaylist('Existos España')
