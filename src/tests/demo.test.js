
describe('Pruebas en el archivo demo.test.js',() => {

  test('Deben de ser iguales los strings', () => {
    //Arrange
    const mensaje1 = 'Hola mundo!';
  
    //Act
    const mensaje2 = `Hola mundo!`;
  
    //Assert
    expect(mensaje1).toBe(mensaje2);
  });
});

