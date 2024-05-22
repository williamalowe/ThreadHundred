import styles from './ProductList.module.css';
import productData from '../../assets/products.json';
import ProductListing from '../ProductListing/ProductListing';

const ProductList = () => {
  const products = productData.products;

  return (
    <div className={styles.list}>
      {
        products.map((product) => 
        <ProductListing 
          key={product.productID}
          tag={product.productTag}
          name={product.productName}
          img={product.productImg}
          price={product.productPrice}
        />
        )
      }
    </div>
  )
}

export default ProductList
