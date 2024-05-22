import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import AnnouncementBanner from '../../components/AnnouncementBanner/AnnouncementBanner';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/Logo';
import HomeBanner from '../../components/HomeBanner/HomeBanner';

const App = () => {
  return (
    <main className={styles.app}>
      <AnnouncementBanner />
      <Navbar />
      <Logo />
      <div className={styles.content}>
        <HomeBanner />
        <Outlet />
      </div>
    </main>
  )
}

export default App
