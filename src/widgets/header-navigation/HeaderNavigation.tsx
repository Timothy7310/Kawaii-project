import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.css';

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li>
          <NavLink
            className={styles.nav__link}
            to="/anime"
          >
            Anime 👀
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.nav__link}
            to="/manga"
          >
            Manga 📖
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
