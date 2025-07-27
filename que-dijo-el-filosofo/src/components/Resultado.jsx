import React from 'react';
import '../App.css';

const Resultado = ({ data }) => {
  if (!data) return null;

  return (
    <div className="result-box">
      <h3>Frase del usuario:</h3>
      <p className="italic">{data.frase_usuario}</p>

      <h3>Autor:</h3>
      <p>{data.autor}</p>

      <h3>Respuesta del sabio:</h3>
      <p>{data.respuesta_sabio}</p>
    </div>
  );
};

export default Resultado;
