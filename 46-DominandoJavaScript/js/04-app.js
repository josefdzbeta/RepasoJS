//Implicit binding

const usuario ={
    nombre: 'Juan',
    edad: 20,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es${this.edad}`); //De manera implícita le indicamos donde encontrará los valores del objeto
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es${this.edad}`);
        }
    }
}
usuario.informacion();
usuario.mascota.informacion();