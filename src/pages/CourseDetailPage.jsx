import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetailPage.css'; // Crea este archivo para los estilos de la página

// Datos de ejemplo para los cursos (idealmente vendrían de una API)
const coursesData = [
  { id: '1', title: 'Cocina Mediterránea Saludable', description: 'Aprende los secretos de la dieta mediterránea con recetas auténticas y nutritivas. Este curso cubre desde la selección de ingredientes frescos hasta técnicas de cocción para preservar los nutrientes. Ideal para quienes buscan un estilo de vida saludable y sabroso.', imageUrl: 'https://via.placeholder.com/600x400/ADD8E6/000000?text=Mediterranea', duration: '8 semanas', instructor: 'Chef Elena García', price: '99€' },
  { id: '2', title: 'Repostería Dietética sin Culpa', description: 'Disfruta de postres deliciosos y saludables sin azúcar añadido ni grasas trans. Explora alternativas naturales para endulzar y aprende a crear tus dulces favoritos de forma más consciente. Perfecto para amantes del dulce que quieren cuidar su salud.', imageUrl: 'https://via.placeholder.com/600x400/F0E68C/000000?text=Reposteria', duration: '6 semanas', instructor: 'Pastelero David Ruiz', price: '79€' },
  { id: '3', title: 'Comida Vegana para Principiantes', description: 'Descubre el mundo de la cocina vegana con recetas fáciles y nutritivas para todos. Este curso te guiará a través de las bases de una dieta basada en plantas, desde la planificación de comidas hasta la preparación de platos balanceados y llenos de sabor.', imageUrl: 'https://via.placeholder.com/600x400/90EE90/000000?text=Vegana', duration: '10 semanas', instructor: 'Nutricionista Sofía López', price: '119€' },
  { id: '4', title: 'Alimentos Fermentados para la Salud Intestinal', description: 'Domina la preparación de kéfir, kombucha y chucrut para una digestión óptima. Aprende los beneficios de los alimentos fermentados y cómo incorporarlos en tu dieta diaria para mejorar tu salud intestinal.', imageUrl: 'https://via.placeholder.com/600x400/DDA0DD/000000?text=Fermentados', duration: '4 semanas', instructor: 'Especialista en Fermentación Carlos Pérez', price: '69€' },
];

function CourseDetailPage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id);

  if (!course) {
    return <div className="course-detail-page">Curso no encontrado.</div>;
  }

  return (
    <div className="course-detail-page">
      <img src={course.imageUrl} alt={course.title} className="course-detail-image" />
      <h1 className="course-detail-title">{course.title}</h1>
      <p className="course-detail-description">{course.description}</p>
      <div className="course-detail-info">
        <p><strong>Duración:</strong> {course.duration}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Precio:</strong> {course.price}</p>
      </div>
      <button className="enroll-button">Inscribirse Ahora</button>
    </div>
  );
}

export default CourseDetailPage;