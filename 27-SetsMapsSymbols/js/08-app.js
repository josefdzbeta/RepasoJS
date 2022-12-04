const ciudades = ['Londres', 'Madrid', 'New York', 'Miami'];
const ordenes = new Set(123,231,131,102);
const datos = new Map();

datos.set('nombre', 'Jose');
datos.set('profesion', 'Desarrollador Web');

//Iterador Default
for (let ciudad of ciudades) {
    console.log(ciudad);
}
for (let orden of ordenes) {
    console.log(orden);
}
for (let dato of datos) {
    console.log(dato);
}




//Entries Iterator //Llave y valor
for (let entry of ciudades.entries()) {
    console.log(entry);
}
for (let entry of ordenes.entries()) {
    console.log(entry);
}
for (let entry of datos.entries()) {
    console.log(entry);
}

//Values iterator //Solo valores
for (let value of ciudades.values) {
    console.log(value);
}
for (let value of ordenes.values) {
    console.log(value);
}
for (let value of datos.values) {
    console.log(value);
}

//Keys Iterator

for (let keys of ciudades.keys()) {
    console.log(keys);
}
for (let keys of ordenes.keys()) { //En caso de que no exista la llave, asgina el valor como llave
    console.log(keys);
}
for (let keys of datos.keys()) {
    console.log(keys);
}