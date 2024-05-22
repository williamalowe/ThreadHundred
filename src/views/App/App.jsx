import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import AnnouncementBanner from "../../components/AnnouncementBanner/AnnouncementBanner";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { createContext, useState } from "react";

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
      }}
    >
      <main className={styles.app}>
        <AnnouncementBanner />
        <Navbar />
        <Logo />
        <div className={styles.content}>
          <HomeBanner />
          <Outlet />
        </div>
      </main>
    </CartContext.Provider>
  );
};

export default App;
