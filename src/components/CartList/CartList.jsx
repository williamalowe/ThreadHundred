import { useContext, useState } from "react";
import styles from "./CartList.module.css";
import { CartContext } from "../../views/App/App";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

const CartList = () => {
  const { cart } = useContext(CartContext);
  const [freeShipping, setFreeShipping] = useState(false);

  return (
    <div className={styles.list}>
      <div className={styles.products}>
        {cart.map((item, index) => (
          <CheckoutItem
            key={index}
            img={item.img}
            product={item.product}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.details}>
        <div className={styles.section}>
          <h5>Total Items: </h5>
          <h5> Items</h5>
        </div>
        <div className={styles.section}>
          <h5>Shipping Cost: </h5>
          <h5>$</h5>
        </div>
        <div className={styles.section}>
          <h3>Total Cost: </h3>
          <h3>$</h3>
        </div>
      </div>
    </div>
  );
};

export default CartList;
