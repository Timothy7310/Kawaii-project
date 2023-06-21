import { Link } from 'react-router-dom';
import { Totoro } from 'shared/ui';
import { useState } from 'react';
import styles from './HeaderAuth.module.css';

export const HeaderAuth = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  return (
    <Link
      className={styles.link}
      to="/auth"
      onMouseOver={() => setIsAnimate(true)}
      onMouseLeave={() => setIsAnimate(false)}
    >
      Sign In <Totoro isAnimate={isAnimate} /> Sign Up
    </Link>
  );
};
