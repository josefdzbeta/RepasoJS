import /*nuevaFuncion*/alias, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tienesSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

// nuevaFuncion();
alias();

console.log(clienteNombre);
console.log(ahorro);
console.log(mostrarInformacion(clienteNombre, ahorro));

tienesSaldo(ahorro);

const cliente = new Cliente(clienteNombre, ahorro)

console.log(cliente.mostrarInformacion());

//Importar empresa
const empresa = new Empresa('Código con Jose', 150, 'Aprender JS');
console.log(empresa.mostrarInformacion());