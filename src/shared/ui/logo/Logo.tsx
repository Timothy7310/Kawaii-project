import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <Link
      className={styles.logo}
      to="/"
    >
      <h1 className={styles.logo__text}>
        Kawaii <span className={styles.logo__span}>project</span>
      </h1>
    </Link>
  );
};
