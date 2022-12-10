//Probar dos valores

function suma(a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b;
}

let resultado = suma(1,2)
let esperado = 3;

if (resultado !== esperado) {
    console.log('esta prueba está mal');
}else{
    console.log('la prueba es correcta');
}

resultado = restar(10,5)
esperado = 5;



