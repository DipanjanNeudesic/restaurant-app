'use client';
import { useState } from 'react';
import styles from './add-recipe.module.css';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, description, ingredients, steps, image };
    await fetch('/api/recipe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
        <h2>Ingredients</h2>
        {ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[index] = e.target.value;
              setIngredients(newIngredients);
            }}
            className={styles.input}
          />
        ))}
        <button
          type="button"
          onClick={() => setIngredients([...ingredients, ''])}
          className={styles.addButton}
        >
          Add Ingredient
        </button>
        <h2>Steps</h2>
        {steps.map((step, index) => (
          <textarea
            key={index}
            value={step}
            onChange={(e) => {
              const newSteps = [...steps];
              newSteps[index] = e.target.value;
              setSteps(newSteps);
            }}
            className={styles.textarea}
          />
        ))}
        <button
          type="button"
          onClick={() => setSteps([...steps, ''])}
          className={styles.addButton}
        >
          Add Step
        </button>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setImage(e.target.files[0]);
            }
          }}
          className={styles.fileInput}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;