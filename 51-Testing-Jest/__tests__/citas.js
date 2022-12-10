/**
 * @jest-environment jsdom
 */

import  Citas from "../js/classes/Citas";

describe('probar la clase de citas', ()=>{

    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', ()=>{
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Pedro',
            telefono: '123123',
            fecha: '10122023',
            hora:'10:30',
            sintomas: 'No para de comer'
        }
        citaObj.id = Date.now();
        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();
        
       
    });
    test('Actualizar cita', ()=>{
        const citaActualizada = {
            id,
            mascota: 'Hook',
            propietario: 'Pedro',
            telefono: '123123',
            fecha: '101220232',
            hora:'11:30',
            sintomas: 'No para de dormir'
        };
        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    });
    test('Eliminar Cita', ()=>{
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
});