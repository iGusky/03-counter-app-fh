// import { render } from "@testing-library/react";
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
  //Forma larga de hacerla
  // test('debe de mostrar el mensaje "Hola, soy Gusky"', () => {
  //   const saludo = 'Hola, soy Gusky';
  //   const wrapper = render(<PrimeraApp saludo={saludo}/>);

  //   expect( wrapper.getByText(saludo) ).toBeInTheDocument();
  // });
  test('debe de mostrar <PrimeraApp /> correctamente ', () => {

    const saludo = "Hola, soy Gusky";
    
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    const saludo = "Hola, soy Gusky";
    const subtitulo = "saludos desde react";

    const wrapper = shallow(<PrimeraApp 
      saludo={saludo}
      subtitulo={subtitulo}
      />);

    const textoParrafo = wrapper.find('p').text();

    expect(textoParrafo).toBe(subtitulo);
    
      

  })
  
  
  
})
