import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Eyes } from 'shared/ui';
import styles from './HeaderNavigation.module.css';

export const HeaderNavigation = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li>
          <NavLink
            className={styles.nav__link}
            to="/anime"
            onMouseOver={() => setIsAnimate(true)}
            onMouseLeave={() => setIsAnimate(false)}
          >
            Anime <Eyes isAnimate={isAnimate} />
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
