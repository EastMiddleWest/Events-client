
import styles from './Layout.module.scss';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet/>
    </main>
  )
}

export default Layout