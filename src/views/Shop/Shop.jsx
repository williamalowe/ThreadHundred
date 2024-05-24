import ProductList from "../../components/ProductList/ProductList";
import styles from "./Shop.module.css";
import { motion } from "framer-motion";

const Shop = () => {
  return (
    <motion.div
      className={styles.shop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <div className={styles.content}>
        <div className={styles.banner}>All Products</div>
        <div className={styles.products}>
          {/* <ProductList /> */}
        </div>
      </div>
      <div className={styles.footer}>New Products Added Monthly!</div>
    </motion.div>
  );
};

export default Shop;
