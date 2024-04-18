import styles from './ProductCard.module.css';

const ProductCard = ({ tag, image, title, price }) => {
  return (
    <div className={styles.card}>
      {
        tag &&
         <div className={styles.tag}>{tag}</div>
      }
      <img src={image} alt="product image" />
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>from ${price}</p>
      </div>
    </div>
  )
}

export default ProductCard
