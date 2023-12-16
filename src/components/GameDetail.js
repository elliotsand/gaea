import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GameDetail = ({ gamesData }) => {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    // Buscar el juego específico según el id en los parámetros de la URL
    const game = gamesData.find(game => game.id.toString() === id);
    setGameData(game);
  }, [gamesData, id]);

  if (!gameData) {
    return <p>Cargando...</p>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{gameData.title}</h1>
      <img
        src={`/images/${gameData.portada}`}
        alt={`Portada de ${gameData.title}`}
        style={{ width: '300px', height: '400px' }}
      />
      <div style={{ margin: '20px' }}>
        <h2>Descripción:</h2>
        <p>{gameData.description || 'No hay descripción disponible.'}</p>
      </div>
      <div style={{ margin: '20px' }}>
        <h2>Requisitos:</h2>
        <p>{gameData.requisitos || 'No hay requisitos disponibles.'}</p>
      </div>
    </div>
  );
};

export default GameDetail;
