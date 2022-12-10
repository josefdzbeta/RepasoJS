//Mixin Pattern
class Persona{
    constructor (nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}
class Cliente{
    constructor (nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`nombre persona ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`mi nombre es ${this.nombre}`);
    }
}

//Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);


const persona = new Persona('Jose', 'correo@correo.com');
console.log(persona);
persona.mostrarInformacion();

const cliente = new Cliente('Pedro', 'pedro@correo.com');
console.log(cliente);
cliente.mostrarInformacion();
