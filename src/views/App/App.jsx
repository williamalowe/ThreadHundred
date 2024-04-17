import AdBanner from '../../components/AdBanner/AdBanner';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Navbar from '../../components/Navbar/Navbar';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <Navbar />
      <HeroBanner />
      <AdBanner />
    </main>
  )
}

export default App
