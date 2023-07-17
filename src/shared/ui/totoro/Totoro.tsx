import { classNames } from 'shared/libs';
import styles from './Totoro.module.css';

type Props = {
  isAnimate: boolean;
};

export const Totoro = ({ isAnimate }: Props) => {
  return (
    <div className={classNames(styles.container, {}, [isAnimate ? styles.container__animate : ''])}>
      <div className={styles.shadow}></div>
      <div className={styles.ears}>
        <div className={styles.ears__left}></div>
        <div className={styles.ears__right}></div>
      </div>
      <div className={styles.totoro}>
        <div className={styles.body}></div>
        <div className={styles.pattern}>
          <div className={classNames(styles.arrow, {}, [styles.arrow__1])}></div>
          <div className={classNames(styles.arrow, {}, [styles.arrow__2])}></div>
          <div className={classNames(styles.arrow, {}, [styles.arrow__3])}></div>
          <div className={classNames(styles.arrow, {}, [styles.arrow__4])}></div>
          <div className={classNames(styles.arrow, {}, [styles.arrow__5])}></div>
          <div className={classNames(styles.arrow, {}, [styles.arrow__6])}></div>
          <div className={classNames(styles.arrow, {}, [styles.arrow__7])}></div>
        </div>
        <div className={styles.eyes}>
          <div className={styles.eyes__left}></div>
          <div className={styles.eyes__right}></div>
        </div>
        <div className={styles.nose}></div>
        <div className={styles.whiskers}>
          <div className={styles.whiskers__left}></div>
          <div className={styles.whiskers__right}></div>
        </div>
      </div>
    </div>
  );
};
