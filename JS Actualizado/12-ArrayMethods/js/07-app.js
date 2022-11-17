//.concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

const resultado = meses.concat(meses2);
//Para concatenar más de un valor
const resultado2 = meses.concat(meses2, meses3);

console.log(resultado);
console.log(resultado2);


//...spread operator o rest operator
//importante como pasas los valores
const resultado3 = [...meses,...meses2,...meses3];
console.log(resultado3);