
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(1, 2)
let esperado = 3;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);
resultado = restar(10, 5)
esperado = 5;





function expected(esperado) {
    return {
        toBe(resultado) {
            if (resultado !== esperado) {
                console.log('esta prueba está mal');
            } else {
                console.log('la prueba es correcta');
            }
        },
        toEqual(resultado){
            if (resultado !== esperado) {
                console.log('No es igual a lo esperado');
            } else {
                console.log('la prueba es correcta');
            }
        }
    }
}