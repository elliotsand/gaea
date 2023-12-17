import React, {useState, useEffect} from 'react';
import {Outlet, useParams} from 'react-router-dom';
import Stars from "./Stars";

const GameDetail = ({gamesData}) => {
  const {id} = useParams();
  const [gameData, setGameData] = useState(null);
  const containerStyle = {
    textAlign: 'center',
    maxWidth: '800px',
    margin: 'auto',
  };

  const detailContainerPStyle = {
    margin: '20px',
    textAlign: 'left',
    padding: '10px',
    borderRadius: '15px',
    display: 'flex',
    background: 'linear-gradient(180deg, rgba(33, 33, 33, 0.80) 33.1%, rgba(33, 33, 33, 0.00) 99.89%)'
  };
  const detailContainerStyle = {
    margin: '20px',
    textAlign: 'left',
    background: 'rgba(33, 33, 33, 0.50)',
    padding: '10px',
    borderRadius: '15px',
  };
  useEffect(() => {
    const game = gamesData.find(game => game.id.toString() === id);
    if (!game) {
      console.error(`Juego no encontrado con ID: ${id}`);
    }
    setGameData(game);
  }, [gamesData, id]);

  if (!gameData) {
    return <p>Cargando...</p>;
  }

  return (
    <div style={containerStyle}>
      <div style={detailContainerPStyle}>
        <img
          src={`/images/${gameData.miniatura}`}
          alt={`Portada de ${gameData.title}`}
          style={{height: '400px', marginRight: '10px'}}
        />
        <div>
          <h1>{gameData.title}</h1>
          <div style={{display: "flex"}}>
            <h3 style={{color: '#16FFF1', marginRight: '10px'}}>{gameData.categoria}</h3>
            <h3 style={{color: '#16FFF1'}}>{gameData.genero}</h3>
          </div>
          <div style={{display: "flex", alignItems: 'center'}}>
            <Stars rating={gameData.rating}/> <h3 style={{color: '#f3da7a',marginLeft: '10px'}}>{gameData.rating}</h3>
          </div>
        </div>
      </div>
      <div style={detailContainerStyle}>
        <h2 style={{fontSize: '20px', color: '#45301C'}}>Descripción:</h2>
        <p style={{fontSize: '20px', color: '#fff'}}>{gameData.description || 'No hay descripción disponible.'}</p>
      </div>
      <div style={detailContainerStyle}>
        <h2 style={{fontSize: '20px', color: '#45301C'}}>Requisitos:</h2>
        <p style={{fontSize: '20px', color: '#fff'}}>{gameData.requisitos || 'No hay requisitos disponibles.'}</p>
      </div>
      <Outlet/>
    </div>
  );
};

export default GameDetail;
