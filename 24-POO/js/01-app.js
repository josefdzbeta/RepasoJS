//Class declaration
class Cliente{
    constructor(nombre, saldo) { //Pasamos los valores que va a tener el objeto una vez instanciado
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

//instanciar clase
const jose = new Cliente('Jose', 700);
console.log(jose);




//Otra forma de declarar una clase
//Class expression
const Cliente2 = class {
    constructor(nombre, saldo) { //Pasamos los valores que va a tener el objeto una vez instanciado
        this.nombre = nombre;
        this.saldo = saldo;
    }
};

const jose2 = new Cliente2('Jose', 700);
console.log(jose2);