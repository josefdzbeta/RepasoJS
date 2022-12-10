const cliente = {
    nombre: 'Jose Angel',
    sueldo: 500
}

describe('Testing al cliente', ()=>{
    test('El cliente es premium', ()=>{
        expect(cliente.sueldo).toBeGreaterThan(400);
    })
    test('El cliente es Jose Angel', ()=>{
        expect(cliente.nombre).toBe('Jose Angel');
    })
    test('No es otro cliente', ()=>{
        expect(cliente.nombre).not.toBe('Pedro');
    })
    test('No tiene 400', ()=>{
        expect(cliente.balance).not.toBe(400)
    }) 
})