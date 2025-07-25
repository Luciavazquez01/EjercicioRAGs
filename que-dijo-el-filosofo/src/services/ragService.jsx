export const consultarSabio = async (frase) => {
  const fraseNormalizada = frase.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let autor = 'Sabio Desconocido';
  let respuesta = 'Esa es una gran reflexión. Recuerda que la filosofía comienza con la duda.';

  if (fraseNormalizada.includes('alma')) {
    autor = 'Platón';
    respuesta = 'El alma es inmortal y eterna, y se mueve por sí misma.';
  } else if (fraseNormalizada.includes('conocete')) {
    autor = 'Sócrates';
    respuesta = 'Conócete a ti mismo. Solo así sabrás lo que debes hacer.';
  } else if (fraseNormalizada.includes('voluntad')) {
    autor = 'Nietzsche';
    respuesta = 'La voluntad de poder es la esencia de la vida.';
  }

  return {
    frase_usuario: frase,
    autor,
    respuesta_sabio: respuesta,
  };
};
