import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Resultado from './components/Resultado';
import { consultarSabio } from './services/ragService';
import './App.css';

const App = () => {
  const [resultado, setResultado] = useState(null);

  const handleConsulta = async (frase) => {
    const data = await consultarSabio(frase);
    setResultado(data);
  };

  return (
    <div className="container">
      <h1>¿Qué dijo el Filósofo?</h1>
      <InputForm onSubmit={handleConsulta} />
      <Resultado data={resultado} />
    </div>
  );
};

export default App;
