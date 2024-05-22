import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProductListing.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductListing = ({ name, price, img, tag }) => {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        <div>
          {
            tag && 
            <div className={styles.tag}>{tag}</div>
          }
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
      <img src={img} alt={name} />
      <div className={styles.lower}>
        <h5>{name}</h5>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductListing
