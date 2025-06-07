import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Crea este archivo para los estilos de la página

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-hero">
        <h1>Descubre el Placer de la Comida Dietética</h1>
        <p>Aprende a cocinar platos saludables y deliciosos que te ayudarán a alcanzar tus objetivos de bienestar.</p>
        <Link to="/cursos" className="homepage-button">Explorar Cursos</Link>
      </header>

      <section className="homepage-features">
        <h2>¿Por qué elegir nuestros cursos?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Recetas Saludables</h3>
            <p>Variedad de recetas diseñadas por nutricionistas.</p>
          </div>
          <div className="feature-item">
            <h3>Chefs Expertos</h3>
            <p>Aprende de los mejores profesionales de la cocina dietética.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible y a tu Ritmo</h3>
            <p>Accede a los cursos cuando quieras, donde quieras.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;