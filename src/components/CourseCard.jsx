import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css'; // Crea este archivo para los estilos de la tarjeta

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.imageUrl || 'https://via.placeholder.com/300'} alt={course.title} className="course-card-image" />
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-description">{course.description}</p>
        <Link to={`/cursos/${course.id}`} className="course-card-button">Ver Curso</Link>
      </div>
    </div>
  );
}

export default CourseCard;