const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;


//Si la primera condición se ejecuta, la segunda no se ejecuta

if(dinero >= totalAPagar){
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si puedo pagar con tarjeta');
} else {
    console.log('Fondos insuficientes');
}