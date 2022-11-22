/*//Ejemplo 1
class Cliente{

    #nombre;

    constructor(nombre, saldo) { //Pasamos los valores que va a tener el objeto una vez instanciado
        this.#nombre = nombre; //Propiedad privada
        this.saldo = saldo;
    }

    //Métodos
    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`; //propiedad privada que sólo se puede acceder desde la clase
    }

    //Propiedades estáticas
    //No requieren instancia
    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

/*
    Atributos privados, públicos, protected
    públicos:  puedes acceder desde dentro de la clase o el objeto
    privado: sólo desde dentro de la clase



const jose = new Cliente('Jose', 400);
console.log(jose.#nombre); //Error, propiedad privada //No podemos acceder desde fuera

*/

//Ejemplo 2
class Cliente {
    
    #nombre;

    setnombre(nombre){
        this.#nombre = nombre;

    }

    getNombre(){
        return this.#nombre;
    }
}

const jose = new Cliente();

console.log(jose.setNombre('jose'));
console.log(jose.getNombre());

console.log(jose.#nombre); //Error