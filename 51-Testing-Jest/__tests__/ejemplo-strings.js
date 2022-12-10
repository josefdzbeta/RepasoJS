const password = '123456';

describe('Valida que la contraseña no esté vacía y tenga una longitud de 6 caracteres', ()=>{
    test('Longitud de contraseña de 6 caracteres', ()=>{
        expect(password).toHaveLength(6);
    });
    test('Password no vacío', ()=>{
        expect(password).not.toHaveLength(0);
    })
});