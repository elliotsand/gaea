// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, images, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="card-title">Elige tu juego</h3>
      <div className="image-container">
        {images.map((image, index) => (
          <Link to={`/game-detail/${index + 1 }`} >
            <img key={index} src={`/images/${image}`} alt={title}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
