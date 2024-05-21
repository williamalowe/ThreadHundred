import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import AnnouncementBanner from './assets/components/AnnouncementBanner/AnnouncementBanner';
import Navbar from './assets/components/Navbar/Navbar';

const App = () => {
  return (
    <main className={styles.app}>
      <AnnouncementBanner />
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  )
}

export default App
