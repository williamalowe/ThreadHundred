import styles from './AdBanner.module.css';
import { motion } from 'framer-motion';

const AdBanner = () => {
  return (
    <article className={styles.banner}>
      <div className={styles.left}>
        <img src="./TeeSub.jpg" alt="tshirt of the month image" />
      </div>
      <div className={styles.right}>
        <h3>T Shirt Of The Month Subscription</h3>
        <p>Can’t decide which shirt you want? Get a subscription and get a new one each month!</p>
        <p>Get a New Ten Hundred Silk Screen Printed T Shirt each month with our T Shirt of the Month subscription service. Each shipment will also include a free sticker!</p>
        <div className={styles.pricing}>
          <h5>$25.00 each month</h5>
          <motion.button
            whileHover={{
              color: '#fff',
              backgroundColor: '#ff917a'
            }}
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </article>
  )
}

export default AdBanner
