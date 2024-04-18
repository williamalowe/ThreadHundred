import AdBanner from '../../components/AdBanner/AdBanner';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from '../../components/ProductCard/ProductCard';
import Spotlight from '../../components/Spotlight/Spotlight';
import styles from './App.module.css';
import data from '../../assets/products.json';


const App = () => {
  const products = data.products;

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
