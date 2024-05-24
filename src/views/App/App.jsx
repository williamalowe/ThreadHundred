import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import AnnouncementBanner from "../../components/AnnouncementBanner/AnnouncementBanner";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { createContext, useState } from "react";
import SideCart from "../../components/SideCart/SideCart";

export const CartContext = createContext({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
});

const App = () => {
  const [cart, setCart] = useState([]);

  const addProduct = (name, img, price) => {
    const productToAdd = {
      product: name,
      img: img,
      price: price,
    };
    setCart((cart) => [...cart, productToAdd]);
    console.log(cart);
  };

  const removeProduct = (target) => {
    const updatedCart = cart.filter((item) => item.product !== target);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
      }}
    >
      <main className={styles.app}>
        <SideCart />
        <AnnouncementBanner />
        <Navbar />
        <Logo />
        <div className={styles.content}>
          <HomeBanner />
          {/* <Outlet /> */}
        </div>
      </main>
    </CartContext.Provider>
  );
};

export default App;
