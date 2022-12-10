//Ejemplo de cómo funciona Jest
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}


async function sumaAsync(a,b){
    return Promise.resolve(suma(a,b))
}
let resultado = suma(1, 2)
let esperado = 3;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);
resultado = restar(10, 5)
esperado = 5;

test('Suma 10 + 20 el resultado debe ser 30', async ()=>{
    const resultado = await sumaAsync(10,20)
    const esperado = 30;
    expected(esperado).toBe(resultado);
})

async function test(mensaje, callback){
    try {
        await callback();
        console.log(`El test ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.log(error);
        console.error(error);
    }
}




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