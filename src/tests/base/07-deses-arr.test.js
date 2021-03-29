import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas de desestructuración', () => {
  test('Debe retornar un numero y un string ', () => {

    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');

  })
  
})
