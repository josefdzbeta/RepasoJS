function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Los prototypes se utilizan como métodos
Cliente.prototype.tipoCliente = function () { //Function busca en el objeto actual, y arrow function busca en la ventana global
    let tipo;
    
    if(this.saldo > 10000){
        tipo = 'Platinum';
    }else if(this.saldo > 5000){
        tipo = 'Gold';
    }else{
        tipo = 'Normal';
    }
    return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
};
//Instanciarlo
const jose = new Cliente('Jose', 100001); 
console.log(jose.tipoCliente()); //Expandiendo el prototype en la consola del navegador, sabremos los métodos exclusivos de estos tipos de objeto
console.log(jose.nombreClienteSaldo());
jose.retiraSaldo(1000);
console.log(jose);


