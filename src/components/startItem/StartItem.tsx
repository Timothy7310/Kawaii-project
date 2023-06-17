import { classNames } from 'shared/libs';
import styles from './StartItem.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
  imageSrc?: string;
  colorHover?: string;
  titleEng?: string;
  titleOriginal?: string;
  isLoading: boolean;
};

const StartItem = ({ imageSrc, colorHover, titleEng, titleOriginal, isLoading }: Props) => {
  return (
    <li
      className={styles.item}
      style={
        {
          '--color-hover': colorHover ? colorHover : 'var(--base-color-hover)',
        } as React.CSSProperties
      }
    >
      {isLoading ? (
        <Skeleton
          baseColor={'var(--skeleton-base-color'}
          highlightColor={'var(--skeleton-highlight-color)'}
          className={styles.poster__wrap}
        />
      ) : (
        <a
          href=""
          className={styles.poster__wrap}
        >
          <img
            src={imageSrc}
            className={styles.poster}
            alt=""
          />
        </a>
      )}
      {isLoading ? (
        <div className={styles.title__wrap}>
          <Skeleton
            className={styles.title}
            baseColor={'var(--skeleton-base-color'}
            highlightColor={'var(--skeleton-highlight-color)'}
          />
          <Skeleton
            className={styles.title__original}
            baseColor={'var(--skeleton-base-color'}
            highlightColor={'var(--skeleton-highlight-color)'}
            width={'78%'}
          />
        </div>
      ) : (
        <a
          href=""
          className={styles.title__wrap}
        >
          <h3 className={styles.title}>{titleEng || titleOriginal}</h3>
          <span className={styles.title__original}>{titleEng ? titleOriginal : ''}</span>
        </a>
      )}
    </li>
  );
};

export default StartItem;
