//Llamadas entre funciones
iniciarApp();

function iniciarApp(){

    console.log('iniciando app');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Jose');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario....espere...');
    console.log(`Usuario autenticado existosamente: ${usuario}`);
}