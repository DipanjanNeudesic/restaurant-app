import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/top-recipe" className={styles.link}>
          Top Recipes
        </Link>
        <Link href="/add-recipe" className={styles.link}>
          Add Recipe
        </Link>
      </nav>
    </header>
  );
};

export default Header;