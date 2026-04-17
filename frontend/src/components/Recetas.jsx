import React from 'react';

// Componente Tarjeta de Receta
const RecipeCard = ({ img, title, summary, time, difficulty, ingredients, link }) => (
  <div className="recipe-card" id='recetas'>
    <img src={img} alt={title} className="card-image" />
    <div className="card-content">
      <h3>{title}</h3>
      <p className="summary">{summary}</p>
      <div className="details">
        <p>
          <strong>Tiempo:</strong> {time}
        </p>
        <p>
          <strong>Dificultad:</strong> {difficulty}
        </p>
      </div>
      <h3>Ingredientes Clave:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a href={link} className="btn-recipe">
        Ver Receta Completa
      </a>
    </div>
  </div>
);

// Datos de las recetas
const recetasData = [
  {
    img: 'assets/img/cards/chia.jpg',
    title: 'Pudín de Chia',
    summary:
      'Preparación overnight con leche de almendras y frutos rojos. Alto en fibra Es la solución perfecta para un desayuno rápido, nutritivo y de alta calidad.',
    time: '5 min',
    difficulty: 'Baja',
    ingredients: ['Leche de Almendras', 'Semillas de Chia', 'Esencia de Vainilla', 'Agave Crudo', 'Frutos Rojos'],
    link: 'https://deliciaskitchen.com/pudin-de-chia/',
  },
  {
    img: 'fikamood/src/assets/img/cards/ensalada.jpg',
    title: 'Ensalada Saludable',
    summary: 'Una ensalada con alto contenido en proteina vegetal y vitaminas. Ideal para tu vianda',
    time: '25 min',
    difficulty: 'Baja',
    ingredients: ['Quinoa', 'Garbanzos cocidos', 'Verduras a gusto', 'Palta', 'Aceite y limon'],
    link: 'https://cookpad.com/ar/recetas/24136845?ref=search&search_term=ensalada+de+garbanzos+y+quinoa',
  },
  {
    img: 'assets/img/cards/pizza.jpg',
    title: 'Pizza sin glutten',
    summary:
      'Manteniendo la textura crujiente y el sabor auténtico que todos amamos en una pizza casera tradicional.',
    time: '5 min',
    difficulty: 'Baja',
    ingredients: [
      'Premezcla de harina sin gluten',
      'Levadura',
      'Agua y Aceite',
      'Salsa de tomate',
      'Topping a gusto para la pizza',
    ],
    link: 'https://www.soyceliaconoextraterrestre.com/pizza-sin-tacc/',
  },
];

function Recetas() {
  return (
    <>
      <h2 className="recetas" id="recetas">
        Recetas Saludables y Deliciosas
      </h2>

      <div className="card-container">
        {recetasData.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </>
  );
}

export default Recetas;