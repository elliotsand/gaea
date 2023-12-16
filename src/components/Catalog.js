// Catalog.js
import React from 'react';

const Catalog = () => {
  // Array con las imágenes
  const images = [
    "rcs_DEW7.png",
    "rcs_DEW8.png",
    "rcs_DEW9.png",
    "rcs_DEW10.png",
    "rcs_DEW11.png",
    "rcs_DEW12.png",
  ];

  // Dividir el array en dos partes (arriba y abajo)
  const topImages = images.slice(0, 3);
  const bottomImages = images.slice(3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ margin: '10px 0' }}>
        <input type="text" placeholder="Buscar juego" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Mostrar las primeras tres imágenes arriba */}
        {topImages.map((image, index) => (
          <img
            key={index}
            src={`/images/${image}`}
            alt={`Juego ${index + 1}`}
            onClick={() => {/* Lógica de mostrar detalles */}}
            style={{ marginRight: '10px', marginBottom: '10px' }}
            title={`Juego ${index + 1}`} // Agregar el atributo title
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {/* Mostrar las siguientes tres imágenes abajo */}
        {bottomImages.map((image, index) => (
          <img
            key={index + 3}
            src={`/images/${image}`}
            alt={`Juego ${index + 4}`}
            onClick={() => {/* Lógica de mostrar detalles */}}
            style={{ marginRight: '10px', marginTop: '10px' }}
            title={`Juego ${index + 4}`} // Agregar el atributo title
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
