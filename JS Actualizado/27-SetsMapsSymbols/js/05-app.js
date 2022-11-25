//Symbols, nuevos de ECMA Script 6
//Los symbols permiten crear una propiedad única, no hay dos symbols que sean iguales
//Las propiedades que utilizan un Symbol no son iterables

//Crear symbol

const sym = Symbol();
const sym2 = Symbol();

if(sym === sym2){
    console.log('Son iguales');
}else{
    console.log('Son diferentes');
}

// console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Jose'; 
persona[apellido] = 'Fernandez'; 
persona.tipoCliente = 'premium';
persona.saldo = 500;


console.log(persona);
console.log(persona.nombre); //undefined
console.log(persona[nombre]);

//Cuando creas un Symbol puedes añadir una descripción de ese Symbol

const nombreCliente = Sybol('Nombre del Cliente');
const cliente = {};

cliente[mombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);