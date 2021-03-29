import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js',()=>{
  
  test('getSaludo debe retornar "Hola Gustavo"', () => {
    //Arrange
    const nombre = 'Gustavo';
    //Act
    const saludo = getSaludo(nombre);
    //Assert
    expect( saludo ).toBe(`Hola ${nombre}`);
  })

  test('getSaludo debe retornar "Hola kiki" si no se recibe argumento nombre', () => {
    //Arrange
    //Act
    const saludo = getSaludo();
    //Assert
    expect( saludo ).toBe('Hola Kiki');
  })
  
  
})