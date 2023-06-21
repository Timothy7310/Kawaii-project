import { Wrapper } from 'shared/ui/wrapper';
import { HeaderNavigation } from 'widgets/header-navigation';
import { HeaderAuth } from 'widgets/header-auth';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.header__inner}>
        header
        <HeaderNavigation />
        <HeaderAuth />
      </Wrapper>
    </header>
  );
};
