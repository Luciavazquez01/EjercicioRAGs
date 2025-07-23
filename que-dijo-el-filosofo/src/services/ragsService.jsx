import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Resultado from './components/Resultado';

const App = () => {
  const [resultado, setResultado] = useState(null);

  const handleConsulta = (frase) => {
    let autor = 'Sabio Desconocido';
    let respuesta = 'Esa es una gran reflexión. Recuerda que la filosofía comienza con la duda.';

    if (frase.toLowerCase().includes('alma')) {
      autor = 'Platón';
      respuesta = 'El alma es inmortal y eterna, y se mueve por sí misma.';
    } else if (frase.toLowerCase().includes('conócete')) {
      autor = 'Sócrates';
      respuesta = 'Conócete a ti mismo. Solo así sabrás lo que debes hacer.';
    } else if (frase.toLowerCase().includes('voluntad')) {
      autor = 'Nietzsche';
      respuesta = 'La voluntad de poder es la esencia de la vida.';
    }

    setResultado({
      frase_usuario: frase,
      autor,
      respuesta_sabio: respuesta,
    });
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
// y la visualización de los resultados obtenidos desde el backend