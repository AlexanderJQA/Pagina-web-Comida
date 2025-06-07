import React, { useState } from 'react';
import './ContactPage.css'; // Crea este archivo para los estilos de la página

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado (simulado)! Revisa la consola para ver los datos.');
    console.log('Datos del formulario:', formData);
    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contáctanos</h1>
      <p className="contact-description">Envíanos tus preguntas, sugerencias o comentarios. Estaremos encantados de ayudarte.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default ContactPage;