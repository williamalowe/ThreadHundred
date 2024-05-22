import ProductList from '../../components/ProductList/ProductList';
import ProductListing from '../../components/ProductListing/ProductListing';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.content}>
        <div className={styles.banner}>
          All Products
        </div>
        <div className={styles.products}>
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Shop
