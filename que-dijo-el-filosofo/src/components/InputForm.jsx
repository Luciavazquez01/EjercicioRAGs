import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [frase, setFrase] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (frase.trim() !== '') {
      onSubmit(frase);
      setFrase('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={frase}
        onChange={(e) => setFrase(e.target.value)}
        placeholder="Escribe una frase o pregunta aquí..."
        rows="2"
        style={{
          padding: '10px',
          width: '100%',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '14px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#007BFF',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Consultar sabio
      </button>
    </form>
  );
};

export default InputForm;
// Este componente es un formulario de entrada para que el usuario escriba una frase o pregunta.
// Usa un estado local para manejar el valor del textarea.  
// Al enviar el formulario, llama a la función onSubmit pasada como prop con la frase ingresada.
// Si el textarea está vacío, no hace nada.
// El formulario incluye:
// - Un textarea para ingresar la frase
// - Un botón para enviar la consulta al sabio
// El estilo del formulario es simple y responsivo, con un diseño amigable para el usuario
