//Operador && 

const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si eres usuario');
}else if(!usuario){
    console.log('inicia sesion');
}else if(!puedePagar){
    console.log('Fondos insuficientes');
}else{
    console.log('no puedes comprar');
}