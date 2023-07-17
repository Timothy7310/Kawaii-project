import { classNames } from 'shared/libs';
import styles from './Eyes.module.css';

type Props = {
  isAnimate: boolean;
};

export const Eyes = ({ isAnimate }: Props) => {
  return (
    <div className={classNames(styles.eyes, {}, [isAnimate ? styles.eyes__animate : ''])}>
      <div className={styles.eye}>
        <div className={styles.eye__pupil}></div>
      </div>
      <div className={styles.eye}>
        <div className={styles.eye__pupil}></div>
      </div>
    </div>
  );
};
