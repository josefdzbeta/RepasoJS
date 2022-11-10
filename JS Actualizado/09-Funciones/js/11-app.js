//Arrow Functions

const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript', 'Node.js')

//Llaves opcionales cuando la función tiene una sola línea
// const aprendiendo2 = (tecnologia) => `aprendiendo ${tecnologia}`;

//Los paréntesis son opcionales cuando tienes un solo parámetro
// const aprendiendo2 = tecnologia => `aprendiendo ${tecnologia}`;

//Son obligatorios cuando tienes más de un parámetro y los {} si tiene más de una línea de código
const aprendiendo2 = (tecnologia, tecnologia2) => `aprendiendo ${tecnologia} y ${tecnologia2}`;


console.log(aprendiendo2('JavaScript', 'Node.js'));
