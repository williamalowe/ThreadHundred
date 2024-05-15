import styles from "./Shop.module.css";
import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/ProductList/ProductList";

const Shop = () => {
  return (
    <main className={styles.shop}>
      <Navbar />
      <ProductList />
    </main>
  );
};

export default Shop;
