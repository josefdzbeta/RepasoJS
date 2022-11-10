//Funciones que retornan valores

function sumar(a,b){
    return a + b
}

const resultado = sumar(10,20)

console.log(resultado);

//Ejemplo más avanzado

let total = 0

function agregarCarrito(precio){
    return total +=precio
}

function calcularImpuesto(total){
    return total * 1.15
}

total = agregarCarrito(100)
total = agregarCarrito(300)
total = agregarCarrito(450)

const totalPagar = calcularImpuesto(total)

console.log(total);
console.log(`el total a pagar es de ${totalPagar}`);