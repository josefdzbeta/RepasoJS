//Class declaration
class Cliente{
    constructor(nombre, saldo) { //Pasamos los valores que va a tener el objeto una vez instanciado
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //Métodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //Propiedades estáticas
    //No requieren instancia
    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

//instanciar clase
const jose = new Cliente('Jose', 700);
console.log(jose);
console.log(jose.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(jose.bienvenida()); //Error



//Otra forma de declarar una clase
//Class expression
const Cliente2 = class {
    constructor(nombre, saldo) { //Pasamos los valores que va a tener el objeto una vez instanciado
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
};

const jose2 = new Cliente2('Jose', 700);
console.log(jose2);
console.log(jose.mostrarInformacion());
