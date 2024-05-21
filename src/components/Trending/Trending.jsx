import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Trending.module.css';

const Trending = () => {
  return (
    <article className={styles.trending}>
      {/* <div className={styles.upper}>
        <div>
          <h5>Trending Items</h5>
          <h3>Most Popular</h3>
        </div>
        <Link to='/shop'>
          <motion.button
            whileHover={{
              boxShadow: 0,
              x: 4,
              y: 4
            }}
            whileTap={{
              scale: 0.9
            }}
          >
            See More
          </motion.button>
        </Link>
      </div>
      <div className={styles.items}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div> */}
    </article>
  )
}

export default Trending
