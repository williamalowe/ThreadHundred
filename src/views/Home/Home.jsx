import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Trending from '../../components/Trending/Trending';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeBanner />
      <HomeCarousel />
      <Trending />
    </div>
  )
}

export default Home
