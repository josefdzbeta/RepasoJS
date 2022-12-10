const cliente = {
    nombre: 'Jose Angell',
    sueldo: 500,
    tipo: 'Premium'
}

describe('testing al cliente', ()=>{
    test('Es Jose Angel',()=>{
        expect(cliente).toMatchSnapshot();
    });
});