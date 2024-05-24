import { useContext, useState, useEffect } from "react";
import styles from "./CartList.module.css";
import { CartContext } from "../../views/App/App";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

const CartList = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0)
  const [freeShipping, setFreeShipping] = useState(false);

  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  }
  const checkShipping = () => {
    if (total >= 85) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }
  }

  useEffect(() => {
    setTotal(calcTotal);
    checkShipping();
  }, [cart, total])

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
      {
        cart.length > 0 ?
        <div className={styles.details}>
        <div className={styles.section}>
          <h5>Total Items: </h5>
          <h5>{cart.length} Items</h5>
        </div>
        <div className={styles.section}>
          <h5>Shipping Cost: </h5>
          {
            freeShipping ? 
            <h5>
              <span>$25</span> FREE!
            </h5>
            :
            <h5>$25</h5>
          }
        </div>
        <div className={styles.section}>
          <h3>Total Cost: </h3>
          {
            freeShipping ?
            <h3><span>${total + 25}</span> ${total}</h3>
            :
            <h3>${total + 25}</h3>
          }
        </div>
      </div>
      :
      <div className={styles.details}>
        <div className={styles.empty_section}>
          <h5>Cart Empty!</h5>
        </div>
      </div>
      }
      
    </div>
  );
};

export default CartList;
