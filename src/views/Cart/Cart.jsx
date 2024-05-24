import styles from "./Cart.module.css";
import React, { useContext } from "react";
import { CartContext } from "../App/App";
import CartList from "../../components/CartList/CartList";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <motion.div
      className={styles.cart}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <div className={styles.content}>
        <div className={styles.banner}>Your Cart</div>
        <div className={styles.products}>
          <div className={styles.left}>
            {/* <CheckoutForm /> */}
          </div>
          <div className={styles.right}>
            <h3>Your Cart</h3>
            <CartList />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
