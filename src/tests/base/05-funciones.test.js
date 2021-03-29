import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas de 05-funciones.js', () => {
  test('Debe de retornar un objeto', () => {
    
    const usuarioTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    //toEqual analiza las propiedades de los objetos y sus valores.
    expect( user ).toEqual( usuarioTest );

  })

  test('getUsuarioActivo debe retornar un objeto ', () => {

    const nombre = 'Gustavo';
    const usuarioActivoTest = {
      uid: 'ABC567',
      username: nombre
    }

    const usuarioActivo = getUsuarioActivo(nombre);

    expect( usuarioActivo ).toEqual( usuarioActivoTest );
  })
  
  
})
