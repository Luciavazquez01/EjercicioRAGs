import React, { useState } from 'react';
import '../App.css';

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
    <form onSubmit={handleSubmit} className="input-form">
      <textarea
        value={frase}
        onChange={(e) => setFrase(e.target.value)}
        placeholder="Escribe una frase o pregunta aquí..."
        rows="2"
      />
      <button type="submit" className="button-submit">
        Consultar sabio
      </button>
    </form>
  );
};

export default InputForm;
