// (function(){
//     console.log('desde un IIFE');
//     window.nombreCliente = 'Jose';

// })();

export const nombreCliente = 'Jose';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro ${ahorro}`
}

export function tienesSaldo(ahorro) {
    if(ahorro > 0){
        console.log('Si tiene saldo');
    }else{
        console.log('no tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro ${this.ahorro}`;
    }
}

export default function nuevaFuncion(){
    console.log('Export Default');
}

