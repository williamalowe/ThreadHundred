import styles from './ProductCard.module.css';

const ProductCard = ({ img, product }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="featured product image" />
      <div className={styles.banner}>{product}</div>
    </div>
  )
}

export default ProductCard
