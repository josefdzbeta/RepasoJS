const url = 'http://localhost:4000/clientes';

//Para crear nuevo cliente
export const nuevoCliente = async cliente=>{
    
    try {
       await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente), //convertir objeto a string
            headers: { //Los headers son la información de qué tipos de info enviamos al servidor
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }

}

//Obtiene todos los clientes
export const obtenerClientes = async ()=>{
    try {
        const resultado = await fetch(url)
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Elimina un cliente
export const eliminarCliente = async (clienteId) =>{
    try {
        await fetch(`${url}/${clienteId}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Obtiene un cliente por su ID //Obtener datos
export const obtenerCliente = async (id) =>{
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const cliente = await respuesta.json();
        
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

//Actualizar un registro
export const editarCliente = async cliente =>{
    try {
       await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}