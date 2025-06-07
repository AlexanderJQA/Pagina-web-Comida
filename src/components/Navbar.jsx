import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Crea este archivo para los estilos del Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Cursos Dietéticos</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/cursos" className="nav-link">Cursos</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;