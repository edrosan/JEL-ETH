
import { Account } from './account';
import styles from './Header.module.scss';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={`${styles.header} `}>
      <h1>JEL</h1>
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
