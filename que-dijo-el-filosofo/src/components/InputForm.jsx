import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [frase, setFrase] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (frase.trim() !== '') {
      onSubmit(frase);
      setFrase('');
    } else {
      alert('Por favor, escribí una frase.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={frase}
        onChange={(e) => setFrase(e.target.value)}
        placeholder="Conócete a ti mismo - Socrates"
        rows={3}
        style={{ width: '100%', padding: '10px' }}
      />
      <button type="submit">Consultar sabio</button>
    </form>
  );
};

export default InputForm;


// Este componente muestra un formulario que permite al usuario escribir una frase filosófica.
// Usa el hook useState para manejar el valor del textarea.
// Cuando el usuario envía el formulario, se valida que la frase no esté vacía.
// Si es válida, se ejecuta la función onSubmit pasada por props, enviando la frase al componente padre (App).
// Luego limpia el campo de texto.
// Si la frase está vacía, muestra una alerta.
//
// Ejemplo de frase para probar: "Conócete a ti mismo." — Sócrates
