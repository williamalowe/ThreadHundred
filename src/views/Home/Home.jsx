import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Reviews from '../../components/Reviews/Reviews';
import Trending from '../../components/Trending/Trending';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* <HomeBanner /> */}
      <HomeCarousel />
      <Trending />
      <Reviews />
    </div>
  )
}

export default Home
