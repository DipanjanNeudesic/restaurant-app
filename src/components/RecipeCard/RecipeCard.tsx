import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import styles from './RecipeCard.module.css';

function RecipeCard ({ recipe }) {
  return (
    <div className={styles.card}>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      <h2 className={styles.title}>{recipe.title}</h2>
      <p className={styles.description}>{recipe.description}</p>
      <Link href={`/recipe/${recipe.id}`} className={styles.link}>
        View Recipe
      </Link>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeCard;