import React, { useEffect } from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import About from '../pages/About/about';
import Home from '../pages/Home/home';
import Header from './Header/header';
import Footer from './Footer/footer';
import ErrorPage from '../pages/Error/error';
import RentalSheet from '../pages/Locations/rentalSheet';

const App = () => {
  // useEffect permet de modifier le titre de la page
  useEffect(() => {
    document.title = 'Kasa';
  }, []);
  return (
    <HashRouter>
      <Header /> {/* Composant pour l'en-tête de l'application */}
      <Routes>
        {/* Lorsque l'utilisateur accède à la route "/", il est redirigé vers "/accueil" */}
        <Route path="/" element={<Navigate replace to="/accueil" />} />

        {/* Lorsque l'utilisateur accède à la route "/accueil", le composant Home est rendu */}
        <Route path="/accueil" element={<Home />} />

        {/* Lorsque l'utilisateur accède à la route "/about", le composant About est rendu */}
        <Route path="/about" element={<About />} />

        {/* Lorsque l'utilisateur accède à une route commençant par "/location/" suivi d'un identifiant,
        le composant RentalSheet est rendu. L'identifiant sera disponible via la props "id" du composant. */}
        <Route path="/location/:id" element={<RentalSheet />} />

        {/* Lorsque l'utilisateur accède à une route qui ne correspond à aucune des routes définies ci-dessus,
        le composant ErrorPage est rendu, affichant une page d'erreur. */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer /> {/* Composant pour le pied de page de l'application */}
    </HashRouter>
  );
};

export default App;
