//Herencia prototypes

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Los prototypes se utilizan como métodos
Cliente.prototype.tipoCliente = function () { //Function busca en el objeto actual, y arrow function busca en la ventana global
    let tipo;
    
    if(this.saldo > 10000){
        tipo = 'Platinum';
    }else if(this.saldo > 5000){
        tipo = 'Gold';
    }else{
        tipo = 'Normal';
    }
    return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
};

Persona.prototype = Object.create(Cliente.prototype); //Pasamos el prototype de cliente a persona
Persona.prototype.constructor = Cliente; //Constructor de cliente // Debes clonar estas propiedades antes de instanciar el objeto

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); //Heredar nombre y saldo de Cliente
    this.telefono = telefono; 
}

//Instanciarlo
const jose = new Persona('Jose', 20000, 123456789);
console.log(jose);
console.log(jose.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
    return `El teléfono de esta persona es ${this.telefono}`;
};

console.log(jose.mostrarTelefono());