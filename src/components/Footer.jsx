import React from 'react';
import './Footer.css'; // Crea este archivo para los estilos del Footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Cursos Dietéticos. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;