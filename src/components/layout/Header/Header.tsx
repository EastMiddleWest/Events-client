
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to='/'>My Awesome Events</Link>
      </h1>
    </header>
  )
}

export default Header