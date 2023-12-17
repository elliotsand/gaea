import React from 'react';

const Stars = ({ rating }) => {

  const roundedRating = Math.round(rating);

  const stars = Array.from({ length: roundedRating }, (_, index) => (
    <span style={{color:'#f3da7a', fontSize:'30px'}} key={index} role="img" aria-label="star">
      ★
    </span>
  ));

  return <div>{stars}</div>;
};

export default Stars;