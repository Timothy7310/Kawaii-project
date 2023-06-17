import { useStartListQuery } from './__generated__/StartListQuery';
import { MediaSort, MediaSeason, MediaType } from '__generated__/types';
import StartItem from 'components/startItem/StartItem';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import styles from './StartList.module.css';

type Props = {
  title: string;
  variables: {
    sort: MediaSort;
    type: MediaType;
    seasonYear?: number;
    season?: MediaSeason;
  };
};

const StartList = ({ title, variables }: Props) => {
  const { data, loading, error } = useStartListQuery({
    variables: {
      ...variables,
    },
  });

  const [skeletonArr, _setSkeletonArr] = useState([
    uuidv4(),
    uuidv4(),
    uuidv4(),
    uuidv4(),
    uuidv4(),
    uuidv4(),
  ]);

  if (loading) {
    return (
      <section className={styles.list__wrap}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {skeletonArr.map((id) => (
            <StartItem
              key={id}
              isLoading={loading}
            />
          ))}
        </ul>
      </section>
    );
  }

  if (error) {
    return <h2>Oops, some error with message: {error.message}</h2>;
  }

  if (data?.Page?.media) {
    return (
      <section className={styles.list__wrap}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {data?.Page?.media.map((item) => (
            <StartItem
              key={item?.id}
              colorHover={item?.coverImage?.color as string}
              titleEng={item?.title?.english ?? ''}
              titleOriginal={item?.title?.romaji ?? ''}
              imageSrc={item?.coverImage?.large ?? ''}
              isLoading={loading}
            />
          ))}
        </ul>
      </section>
    );
  }
};

export default StartList;
