import styles from "./ProductList.module.css";
import productData from "../../assets/products.json";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const products = productData.products;

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.productID}
          tag={product.productTag}
          image={product.productImg}
          title={product.productName}
          price={product.productPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;
