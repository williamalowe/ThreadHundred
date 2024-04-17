import AdBanner from '../../components/AdBanner/AdBanner';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Navbar from '../../components/Navbar/Navbar';
import Spotlight from '../../components/Spotlight/Spotlight';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <Navbar />
      <HeroBanner />
      <AdBanner />
      <Spotlight />
    </main>
  )
}

export default App
