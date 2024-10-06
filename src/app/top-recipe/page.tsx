import styles from './top-recipe.module.css';
import RecipeCard from 'src/components/RecipeCard/RecipeCard';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/recipe", {next:{revalidate:3600}});
  
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  
    return res.json();
  };

const TopRecipes = async () => {
  const recipes = await getData();
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Top Recipes</h1>
      <div className={styles.recipeList}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
    </>
  );
};

export default TopRecipes;