//Composition, alternativa a las clases
//En vez de tener una clase principal sobre la cual se hereda, creas muchas funciones y las vas asignando según sea necesario

const obtenerNombre = info =>({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info ({
    agregarEmail(email){
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa = info =>({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})


function Cliente(nombre, email, empresa) {
    let info ={
        nombre,
        email,
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)

    )
}

const cliente = Cliente('Jose', null, 'ntt');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com')
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = empleado('Pedro', null, 'Programador');
empleado = agregarEmail('correo@correo.com')
empleado.mostrarNombre();
empleado.mostrarEmail();