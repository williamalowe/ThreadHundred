import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Reviews from "../../components/Reviews/Reviews";
import Trending from "../../components/Trending/Trending";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <HomeCarousel />
      <Trending />
      {/* <Reviews /> */}
    </motion.div>
  );
};

export default Home;
