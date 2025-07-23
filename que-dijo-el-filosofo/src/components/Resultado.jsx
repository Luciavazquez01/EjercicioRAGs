import React from 'react';

const Resultado = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Frase del usuario:</h3>
      <p><em>{data.frase_usuario}</em></p>

      <h3>Autor:</h3>
      <p>{data.autor}</p>

      <h3>Respuesta del sabio:</h3>
      <blockquote>{data.respuesta_sabio}</blockquote>
    </div>
  );
};

export default Resultado;
// Este componente muestra el resultado de la consulta al sabio.
// Recibe los datos como props y los muestra en un formato legible. 
// Si no hay datos, no renderiza nada (retorna null).
// Muestra:
// - La frase del usuario
// - El autor de la frase
// - La respuesta del sabio en un bloque de cita (blockquote)
// Se usa para mostrar los resultados de la consulta realizada desde el componente App.
// Se renderiza solo si hay datos disponibles, evitando errores de renderizado vacío.