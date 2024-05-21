import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import AnnouncementBanner from './assets/components/AnnouncementBanner/AnnouncementBanner';

const App = () => {
  return (
    <main className={styles.app}>
      <AnnouncementBanner />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  )
}

export default App
