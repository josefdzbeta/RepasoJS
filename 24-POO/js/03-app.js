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

//Herencia

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        
        //Como estamos heredando de cliente y quieres utilizar las propiedades de nombre y saldo, debemos llamar al constructor de super 
        // this.nombre = nombre;
        // this.saldo = saldo;

        super(nombre, saldo); // busca los atributos en el constructor padre

        this.telefono = telefono;
        this.categoria = categoria;

    }
        //Al existir un método en la clase hijo, sobreescribe el método principal y lo ignora, pasa con todos los métodos
    static bienvenida(){ //Reescribir método
        return `Bienvenido al cajero de empresas`;
    }
}

//instanciar clase
const jose = new Cliente('Jose', 700);
const empresa = new Empresa('Código con Jose', 400, 123456789, 'aprender a aprender');

console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida);
console.log(Empresa.bienvenida);

