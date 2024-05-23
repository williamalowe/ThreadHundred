import styles from './CheckoutItem.module.css';

const CheckoutItem = ({ img, product, price }) => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={img} alt={product} />
      </div>
      <div className={styles.product}>
        <h3>{product}</h3>
      </div>
      <div className={styles.price}>
        <h3>${price}</h3>
      </div>
    </div>
  )
}

export default CheckoutItem
