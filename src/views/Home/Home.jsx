import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeBanner />
      <HomeCarousel />
    </div>
  )
}

export default Home
