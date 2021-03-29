import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({numero = 1}) => {

  // const [nombre, setNombre] = useState('Kiki');
  const [ counter, setCounter ] = useState( numero );

  //handleAdd
  const handleAdd = (e) =>{
    //* Existen dos formas para usar el setCounter
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1)
  }

  const handleSubstraction = () =>{
    setCounter( counter - 1);
  }

  const handleReset = () => {
    setCounter( numero );
  }

  return (<>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>

    {/* <button onClick={ e => handleAdd(e) }>+1</button> */}
    {/* Al solo tener un argumento y este mismo se le pasa a la función, se puede simplificar. */}
    <button onClick={ handleAdd }>+1</button>
    <button onClick={ handleReset }>Reset</button>
    <button onClick={ handleSubstraction }>-1</button>
    
  </>);



};

CounterApp.protoTypes ={
  numero: PropTypes.number.isRequired
}

export default CounterApp;