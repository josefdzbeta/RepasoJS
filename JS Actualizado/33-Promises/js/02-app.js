//Callback Hell
const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado ${pais}`);
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell(params) {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('España', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}
iniciarCallbackHell();