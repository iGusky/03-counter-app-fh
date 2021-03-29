import React from 'react'; 
import PropTypes from "prop-types";
// import React, { Fragment } from 'react'; 

//* Functional components
const PrimeraApp = ( {saludo, subtitulo} ) =>{

  return (<>
      <h1>{saludo}</h1>
      <p>{ subtitulo }</p>
    </>);
}

//* Restricciones de los Props
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
  subtitulo: "No se ha enviado un subtitulo"
}

export default PrimeraApp;