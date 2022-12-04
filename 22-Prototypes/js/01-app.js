//No puedes crear objetos dinámicos y reutilizables
const cliente = {
    nombre: 'Jose',
    saldo: 500
};

console.log(cliente);
console.log(typeof cliente);

//Si puedes crear objetos dinámicos y reutilizables
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jose = new Cliente('Jose', 500);

console.log(jose);