import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Resultado from './components/Resultado';
import { consultarSabio } from './services/ragService';

const App = () => {
  const [resultado, setResultado] = useState(null);

  const handleConsulta = async (frase) => {
    try {
      const data = await consultarSabio(frase);
      setResultado(data);
    } catch (err) {
      alert("Error al consultar al sabio.");
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>¿Qué dijo el Filósofo?</h1>
      <InputForm onSubmit={handleConsulta} />
      <Resultado data={resultado} />
    </div>
  );
};

export default App;

// Este es el componente principal de la aplicación "¿Qué dijo el Filósofo?".
// Se encarga de coordinar el flujo entre el formulario de entrada del usuario
// y la visualización de los resultados obtenidos desde el backend.
//
// Funcionalidades clave:
// - Usa el hook useState para almacenar el resultado recibido desde el backend.
// - Define la función handleConsulta, que se ejecuta cuando el usuario envía una frase.
// Esta función llama al servicio consultarSabio (definido en ragService.js) que realiza
// una petición POST al backend con la frase del usuario.
// - Si la respuesta es exitosa, guarda el resultado en el estado 'resultado'.
// - Renderiza:
// - Un título principal
// - El componente InputForm, pasándole la función handleConsulta como prop
// - El componente Resultado, al que le pasa los datos recibidos desde el backend
