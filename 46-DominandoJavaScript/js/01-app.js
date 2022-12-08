//Scope global o local //Es el alcance del valor de una variable

const login = true;

function clienteLogin() {
    const cliente = 'Jose';
    console.log(cliente);

    if(login){
        //Diferente scope
        const cliente = 'Admin';
        console.log(cliente);
    }
}
clienteLogin();

