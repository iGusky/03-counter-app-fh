import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';

describe('Pruebas de <CounterApp />', () => {
  //Se inicializa antes para poder usar el intellisense (autocompletado).
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrar <CounterApp /> generado correctamente', () => {
     
    expect(wrapper).toMatchSnapshot();

  });

  test('debe renderizar la cantidad enviada por props',() =>{

    const numero = 100;

    const wrapper = shallow(<CounterApp numero={numero} />);
    const cantidadEsperada = Number(wrapper.find('h2').text());

    expect(cantidadEsperada).toBe(numero);

  });

  test('debe de incrementar el contador con el botón +1', () => {

    wrapper.find('button').at(0).simulate('click');

    const cantidadEsperada = Number(wrapper.find('h2').text());

    expect(cantidadEsperada).toBe(2);
    
  });
  
  test('debe de decrementar el contador con el botón -1', () => {

    wrapper.find('button').at(2).simulate('click');

    const cantidadEsperada = Number(wrapper.find('h2').text());

    expect(cantidadEsperada).toBe(0);
    
  });

  test('debe reiniciar el contador con el botón "reset"', () => {

    const numero = 105;
    const wrapper = shallow(<CounterApp numero={numero} />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');

    wrapper.find('button').at(1).simulate('click');

    const cantidadEsperada = Number(wrapper.find('h2').text());

    expect(cantidadEsperada).toBe(numero);


  })
  
  
  
})
