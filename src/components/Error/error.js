import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/error.css';

function ErrorPage() {
  return (
    <div className="errorContainer">
      <p className="errorNumber">404</p>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="errorLink">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default ErrorPage;
