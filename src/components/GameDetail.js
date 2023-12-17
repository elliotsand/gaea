import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const GameDetail = ({gamesData}) => {
  const {id} = useParams();
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
    <div style={{textAlign: 'center', maxWidth: '800px', margin: 'auto'}}>
      <div style={{
        margin: '20px',
        textAlign: 'left',
        background: 'rgba(33, 33, 33, 0.50)',
        padding: '10px',
        borderRadius: '15px',
        display: 'flex'
      }}>
        <img
          src={`/images/${gameData.miniatura}`}
          alt={`Portada de ${gameData.title}`}
          style={{height: '400px'}}
        />
        <div>
          <h1>{gameData.title}</h1>
          <div style={{ display: "flex"}}></div>
          <h3 style={{color:'#16FFF1'}}>{gameData.categoria}</h3>
          <h3 style={{color:'#16FFF1'}}>{gameData.genero}</h3>
        </div>
      </div>
      <div style={{
        margin: '20px',
        textAlign: 'left',
        background: 'rgba(33, 33, 33, 0.50)',
        padding: '10px',
        borderRadius: '15px'
      }}>
        <h2 style={{fontSize: '20px', color: '#45301C'}}>Descripción:</h2>
        <p style={{fontSize: '20px', color: '#fff'}}>{gameData.description || 'No hay descripción disponible.'}</p>
      </div>
      <div style={{
        margin: '20px',
        textAlign: 'left',
        background: 'rgba(33, 33, 33, 0.50)',
        padding: '10px',
        borderRadius: '15px'
      }}>
        <h2 style={{fontSize: '20px', color: '#45301C'}}>Requisitos:</h2>
        <p style={{fontSize: '20px', color: '#fff'}}>{gameData.requisitos || 'No hay requisitos disponibles.'}</p>
      </div>
    </div>
  );
};

export default GameDetail;
