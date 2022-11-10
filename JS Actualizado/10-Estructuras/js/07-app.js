//Operador OR ||

const efectivo = 300
const credito = 100
const disponible = efectivo + credito
const totalAPagar = 600

//Con que una condicion se cumpla, se ejecuta el código
if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
    console.log('si podemos pagar');
}else{
    console.log('Fondos insuficientes');
}