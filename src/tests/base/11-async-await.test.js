import { getImagen } from '../../base/11-async-await';

describe('Pruebas con esync await', () => {
  test('debe retornar el URL de la imagen ', async () => {
    const url = await getImagen();
    expect ( url.includes('https://')).toBe( true );
  })
  
})
