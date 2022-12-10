//Singleton, evitamos que la clase pueda ser instanciada más de una vez

let instancia = null;
class Persona{
    constructor(nombre, email){

        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia; //Devuelve la instancia actual
        }
        
    }
}

const persona = new Persona('Jose', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Diego', 'diego@diego.com');
