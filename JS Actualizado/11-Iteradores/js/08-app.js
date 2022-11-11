//for in
//for of itera sobre arrays mientras que for in itera sobre objetos
const pendientes = [ 'tarea', 'comer', 'proyecto', 'Estudiar JavaScript']

for (let pendiente in pendientes) {
    console.log(pendiente);
}

const coche = {
    modelo: 'Mercedes',
    year: '2023',
    color: 'White'
}

for (let propiedad in coche) {
    console.log(propiedad);
}

for (let propiedad in coche) {
    console.log(`${coche[propiedad]}`);
}

//Ecma 7

for (let [llave, valor] of Object.entries(coche)) {
    console.log(valor);
    console.log(llave);
}