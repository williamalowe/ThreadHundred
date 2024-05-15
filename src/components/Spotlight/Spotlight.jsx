import styles from "./Spotlight.module.css";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../assets/products.json";

const Spotlight = () => {
  const products = data.products;

  return (
    <article className={styles.spotlight}>
      <h3>Featured Products</h3>
      <div className={styles.content}>
        {products.slice(1, 4).map((product) => (
          <ProductCard
            key={product.productID}
            tag={product.productTag}
            image={product.productImg}
            title={product.productName}
            price={product.productPrice}
          />
        ))}
      </div>
    </article>
  );
};

export default Spotlight;
