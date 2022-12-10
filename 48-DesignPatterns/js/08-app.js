//Mediator

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Vendedor.prototype = {
    oferta: (articulo, precio)=> {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio ${precio} `);
    },
    vendido: comprador =>{
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad, comprador) =>{
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}
function Subasta() {
    let compradores = {};

    return {
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


//Crear objetos
const jose = new Comprador('jose');
const diego = new Comprador('diego');
const vendedor = new Vendedor('Vendedor de Coches');
const subasta = new Subasta();

subasta.registrar(jose);
subasta.registrar(diego);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);
jose.oferta(350, jose);
diego.oferta(450, diego);
jose.oferta(500, jose);
diego.oferta(700, diego);
vendedor.vendido('Pepe');

