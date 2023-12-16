// Card.js
import React from 'react';

const Card = ({ title, images, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="card-title">Elige tu juego</h3>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={`/images/${image}`} alt={title}/>
        ))}
      </div>
    </div>
  );
};

export default Card;
