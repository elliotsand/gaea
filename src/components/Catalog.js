import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [gamesData, setGamesData] = useState([]);
  const [topImages, setTopImages] = useState([]);
  const [bottomImages, setBottomImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('games.json')
      .then(response => response.json())
      .then(data => {
        setGamesData(data);
        // Dividir el array en dos partes (arriba y abajo)
        setTopImages(data.slice(0, 3));
        setBottomImages(data.slice(3));
      })
      .catch(error => console.error('Error loading games data:', error));
  }, []);

  if (gamesData.length === 0) {
    return <p>Cargando...</p>;
  }

  // Filtrar juegos por título
  const filteredTopImages = topImages.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredBottomImages = bottomImages.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          placeholder="Buscar juego"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {filteredTopImages.map((game) => (
          <div key={game.id} style={{
            margin: '10px', display: 'block', borderRadius: '13px', padding: '15px',
            background: 'linear-gradient(180deg, rgba(33, 33, 33, 0.80) 33.1%, rgba(33, 33, 33, 0.00) 99.89%)'
          }}>
            <Link to={`/game-detail/${game.id}`}>
              <img
                src={`/images/${game.miniatura}`}
                alt={`Juego ${game.id} - Miniatura`}
                style={{ marginBottom: '10px' }}
                title={`Juego ${game.id} - Miniatura`}
              />
              <h3 style={{ textAlign: 'center', textDecoration: 'none' }}>{game.title}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {filteredBottomImages.map((game) => (
          <div key={game.id} style={{
            margin: '10px', display: 'block', borderRadius: '13px', padding: '15px',
            background: 'linear-gradient(180deg, rgba(33, 33, 33, 0.80) 33.1%, rgba(33, 33, 33, 0.00) 99.89%)'
          }}>
            <Link to={`/game-detail/${game.id}`}>
              <img
                src={`/images/${game.miniatura}`}
                alt={`Juego ${game.id} - Miniatura`}
                style={{ marginBottom: '10px' }}
                title={`Juego ${game.id} - Miniatura`}
              />
              <h3 style={{ textAlign: 'center', textDecoration: 'none' }}>{game.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
