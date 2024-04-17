import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Thread Hundred Store</h1>
          <h1>Thread Hundred Store</h1>
          <h1>Thread Hundred Store</h1>
        </div>
        <p>
          Apparel inspired by cartoons, anime, street art, and graffiti. The perfect blend of 
          childlike-imagination and style, bringing vibrant color and unique designs to your
          wardrobe.
        </p>
      </div>
      <p></p>
      <div className={styles.image}>
        <img src="./banner01.jpg" alt="banner image" />
      </div>
    </section>
  )
}

export default HeroBanner
