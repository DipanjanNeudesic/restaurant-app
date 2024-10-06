import Link from 'next/link';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import styles from './home.module.css';

export const metadata = {
    title: "App Router",
  };

const Home = ({ recipes }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipe Sharing App</h1>
      <div className={styles.recipeList}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Link href="/add-recipe" className={styles.addRecipeButton}>
        Add Recipe
      </Link>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:300/api/recipe');
  const recipes = await res.json();

  return {
    props: {
      recipes,
    },
  };
}

export default Home;