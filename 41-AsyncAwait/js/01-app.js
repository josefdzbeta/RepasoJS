//Try Catch
// console.log(1+1);
// hola();
// console.log(2+2);


console.log(1+1);

try{
    autenticarUsuario()
}catch(error){
    console.log(error);
}
console.log(2+2);

//Debes utilizar try catch en sitios críticos de tu aplicación, por ejemplo: 
//Conectar a una bd, consultar una api, autenticar un usuario o 
//acciones que en caso de que falle nuestra aplicación siga funcionando