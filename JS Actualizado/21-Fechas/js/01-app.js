const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); //Los meses empiezan en 0
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); //Milisegundos desde 1970 hasta ahora 
Date.now(); //No requiere instanciarse

valor = diaHoy.setFullYear(2010);



console.log(valor);