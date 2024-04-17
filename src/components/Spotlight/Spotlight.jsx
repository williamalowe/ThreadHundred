import styles from './Spotlight.module.css';

const Spotlight = () => {
  return (
    <article className={styles.spotlight}>
      <h3>Featured Products</h3>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src="./products/product01.jpg" alt="featured product image" />
          <h5>"Warrior Blossom" - Premium Soft-Washed Long-Sleeve Shirt</h5>
          <p>from $39.50</p>
        </div>
        <div className={styles.card}>
          <img src="./products/product02.jpg" alt="featured product image" />
          <h5>"Goated" - T Shirt</h5>
          <p>from $39.50</p>
        </div>
        <div className={styles.card}>
          <img src="./products/product03.jpg" alt="featured product image" />
          <h5>"Warrior Blossom" - Pull-Over Hoodie</h5>
          <p>from $39.50</p>
        </div>
      </div>
    </article>
  )
}

export default Spotlight
