import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import Card from './components/Card';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import GameDetail from './components/GameDetail';

const Home = () => (
  <>
    <Slider />
    <Card title="Juego 1" images={["rcs_DEW7.png", "rcs_DEW8.png", "rcs_DEW9.png"]} onClick={() => { /* Lógica de mostrar detalles */ }} />
  </>
);

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/catalogo/:id" element={<GameDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
