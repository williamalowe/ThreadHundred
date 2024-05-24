import styles from "./ProductList.module.css";
import productData from "../../assets/products.json";
import ProductListing from "../ProductListing/ProductListing";
import { motion } from "framer-motion";

const wrapper = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const ProductList = () => {
  const products = productData.products;

  return (
    <motion.div
      className={styles.list}
      variants={wrapper}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <ProductListing
          key={product.productID}
          tag={product.productTag}
          name={product.productName}
          img={product.productImg}
          price={product.productPrice}
        />
      ))}
    </motion.div>
  );
};

export default ProductList;
