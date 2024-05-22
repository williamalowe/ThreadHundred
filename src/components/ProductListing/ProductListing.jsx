import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProductListing.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductListing = ({ name, price, img, tag }) => {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        <div>
          {
            // tag && 
            <div className={styles.tag}>tag here</div>
          }
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
      <img src="/products/product01.jpg" alt="product image" />
      <div className={styles.lower}>
        <h5>Warrior Blossom - Premium Soft-Washed Long-Sleeve Shirt</h5>
        <p>$55.5</p>
      </div>
    </div>
  )
}

export default ProductListing
