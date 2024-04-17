import styles from './HeroBanner.module.css';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.header}>
        <h1>Thread Hundred Shop</h1>
        <h1>Thread Hundred Shop</h1>
        <h1>Thread Hundred Shop</h1>
        <h1>Thread Hundred Shop</h1>
      </div>
      <p>
        Apparel specialists, emphasizing unique designs inspired by cartoons and anime, street art and graffiti, childlike imagination, comics, world cultures, religions, and folklore.
      </p>
      <p>
        The perfect balance of style, comfort, and attitude. All materials are source ethically, and all designs are created
        in-house by our team of talented artists. 
      </p>
      <div className={styles.button}>
        <motion.button
          whileHover={{
            color: '#fff',
            backgroundColor: '#ff917a'
          }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  )
}

export default HeroBanner
