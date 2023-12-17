import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import GameDetail from './components/GameDetail';
const AppRouter = () => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    // Cargar datos desde el archivo JSON o tu fuente de datos
    fetch('games.json')
      .then(response => response.json())
      .then(data => setGamesData(data))
      .catch(error => console.error('Error loading games data:', error));
  }, []);

  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/catalogo"
          element={<Catalog gamesData={gamesData} />}
        />
        <Route
          path="/contacto"
          element={<Contact />}
        />
        <Route
          path="/game-detail/:id"
          element={<GameDetail gamesData={gamesData} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
