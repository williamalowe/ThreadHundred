import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Trending.module.css';
import ProductCard from '../../ProductCard/ProductCard';

const Trending = () => {
  return (
    <article className={styles.trending}>
      <div className={styles.upper}>
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
        <ProductCard 
          img={'./products/product00.jpg'}
          product={'T Shirt Of The Month Subscription'}
        />
      </div>
    </article>
  )
}

export default Trending
