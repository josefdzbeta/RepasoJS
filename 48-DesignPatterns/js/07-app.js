//Namespace
const restaurantApp = {};

restaurantApp.platos = [
    {
        plato: 'Pizza',
        precio: 12
    },
    {
        plato: 'Hamburguesa',
        precio: 10
    },
    {
        plato: 'Pasta',
        precio: 13
    },
];

restaurantApp.funciones = {
    mostrarMenu: () =>{
        console.log(`Bienvenidos a nuestro menú`);

        platos.forEach((plato, index) => {
            console.log(`${index} : ${plato.plato} ${plato.precio}`);
        })
    },
    ordenar: id =>{
        console.log(`Tu plato: ${restaurantApp.platos[id]} se está preparando`);
    },
    agregarPlato: (plato, precio) =>{
        const nuevo = {
            plato,
            precio
        }
        restaurantApp.platos.push(nuevo)
    }
}

const {platos} = restaurantApp;
restaurantApp.funciones.mostrarMenu(platos);
restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlato('Taco', 9);