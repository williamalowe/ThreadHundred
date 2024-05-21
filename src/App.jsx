import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import AnnouncementBanner from './assets/components/AnnouncementBanner/AnnouncementBanner';

const App = () => {
  return (
    <main className={styles.app}>
      <AnnouncementBanner />
      <Outlet />
    </main>
  )
}

export default App
