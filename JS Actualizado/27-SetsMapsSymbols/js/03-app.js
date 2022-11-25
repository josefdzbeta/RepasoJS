//Maps
//La llave y el valor pueden ser cualquier tipo de dato
//Los maps tienen mejor performance que los objetos (sirven para añadir o eliminar elementos, también para recorrerlos)

const cliente = new Map();

//Para añadir valor //En los sets es solo el valor
cliente.set('nombre', 'Jose'); //Llave, valor //Llave tipo string
cliente.set('tipo', 'Premium'); //Llave, valor //Llave tipo string
cliente.set('saldo', 3000); //Llave, valor //Llave tipo string
cliente.set(true, true); //cualquier tipo de llave y valor
cliente.set([0], true);

console.log(cliente);
console.log(cliente.size);

//comprobar si hay un valor
console.log(cliente.has('nombre2'));

//obtener un valor
console.log(cliente.get('nombre'));

cliente.delete(saldo);

console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

cliente.clear(); //limpia todo el map
console.log(cliente);

const paciente = new Map([['nombre', 'paciente'], ['habitación', 'no definida']]); //constructor de map

paciente.set('dr', 'Dr asignado');
paciente.set('nombre', 'Jose'); //Reescribir un valor


console.log(paciente);

paciente.forEach(datos => {
    console.log(datos);
});
paciente.forEach((datos,index) => { //el índice 
    console.log(index);
});

