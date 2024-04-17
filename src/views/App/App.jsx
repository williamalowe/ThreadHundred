import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Navbar from '../../components/Navbar/Navbar';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <Navbar />
      {/* <HeroBanner /> */}
    </main>
  )
}

export default App
