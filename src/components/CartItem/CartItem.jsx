import styles from './CartItem.module.css';

const CartItem = ({img, product, price}) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={product} />
      </div>
      <div className={styles.desc}>
        <h3>{product}</h3>
        <h5>${price}</h5>
      </div>
    </div>
  )
}

export default CartItem
