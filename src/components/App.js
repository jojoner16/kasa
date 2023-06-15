import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import About from '../pages/About/about';
import Home from '../pages/Home/home';
import Header from './Header/header';
import Footer from './Footer/footer';
import ErrorPage from './Error/error';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
