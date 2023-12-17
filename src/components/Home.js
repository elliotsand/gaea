// Home.js
import React from 'react';
import Slider from "./Slider";
import Card from "./Card";

const Home = () => (
  <div style={{maxWidth:'1200px',margin:'auto'}}>
    <Slider />
    <Card title="Juego 1" images={["rcs_DEW7.png", "rcs_DEW8.png", "rcs_DEW9.png"]}
          onClick={() => { /* Lógica de mostrar detalles */ }} />
  </div>
);

export default Home;
