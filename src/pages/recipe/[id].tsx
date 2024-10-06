import { useRouter } from 'next/router';
import styles from './recipe.module.css';
import Image from 'next/image';

const RecipePage = ({ recipe }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{recipe.title}</h1>
      {/* <img width={10} height={10} src={recipe.image} alt={recipe.title} className={styles.image} /> */}
      <Image src={recipe.image} width={300} height={200} alt={recipe.title} className={styles.image} />
      <p className={styles.description}>{recipe.description}</p>
      <h2 className='h2'>Ingredients</h2>
      <ul className='ul'>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className='h2'>Steps</h2>
      <ol className='ol'>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/recipe');
  const recipes = await res.json();

  const paths = recipes.map(recipe => ({
    params: { id: recipe.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/recipe/${params.id}`);
  const recipe = await res.json();

  return { props: { recipe } };
}

export default RecipePage;