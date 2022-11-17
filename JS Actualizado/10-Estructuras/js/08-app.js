const autenticado = true;

if(autenticado){
    console.log('el usuario está autenticado');
}

const puntuacion = 450;


function revisiarPuntuacion(){

    if(puntuacion > 400){
        console.log('Excelente');
        return;
    }
    
    if(puntuacion > 300){
        console.log('buena puntuacion felicades');
        return;
    }
    
}

revisiarPuntuacion();