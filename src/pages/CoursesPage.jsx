import React from 'react';
import CourseCard from '../components/CourseCard';
import './CoursesPage.css'; // Crea este archivo para los estilos de la página

// Datos de ejemplo para los cursos
const courses = [
  { id: '1', title: 'Cocina Mediterránea Saludable', description: 'Aprende los secretos de la dieta mediterránea con recetas auténticas y nutritivas.', imageUrl: 'https://via.placeholder.com/300x180/ADD8E6/000000?text=Mediterranea' },
  { id: '2', title: 'Repostería Dietética sin Culpa', description: 'Disfruta de postres deliciosos y saludables sin azúcar añadido ni grasas trans.', imageUrl: 'https://via.placeholder.com/300x180/F0E68C/000000?text=Reposteria' },
  { id: '3', title: 'Comida Vegana para Principiantes', description: 'Descubre el mundo de la cocina vegana con recetas fáciles y nutritivas para todos.', imageUrl: 'https://via.placeholder.com/300x180/90EE90/000000?text=Vegana' },
  { id: '4', title: 'Alimentos Fermentados para la Salud Intestinal', description: 'Domina la preparación de kéfir, kombucha y chucrut para una digestión óptima.', imageUrl: 'https://via.placeholder.com/300x180/DDA0DD/000000?text=Fermentados' },
];

function CoursesPage() {
  return (
    <div className="courses-page">
      <h1 className="courses-title">Nuestros Cursos de Cocina Dietética</h1>
      <div className="courses-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;