import { getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
  test('Debe de retornar un héroe por id', () => {
    
    const id = 2;
    const heroe = getHeroeById(id);
    
    const heroeData = heroes.find( h => h.id === id);

    expect(heroe).toEqual(heroeData);

  });

  test('Debe de retornar un undefine si el Héroe no existe', () => {
    
    const id = 10;
    const heroe = getHeroeById(id);
    
    expect(heroe).toBe(undefined);

  })

  test('Debe retornar un arreglo con los Héroes de DC', () => {
    
    const owner = 'DC';
    const heroesGet = getHeroesByOwner(owner);

    const heroesData = heroes.filter( (h) => h.owner === owner );

    expect(heroesGet).toEqual(heroesData);

  })

  test('Debe retornar los arreglos con los Héroes de Marvel', () => {
    
    const owner = 'Marvel';
    const heroesGet = getHeroesByOwner(owner);

    expect(heroesGet.length).toBe(2);
    
  })
  
  
  
  
})
