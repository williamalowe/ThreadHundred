import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <>
      <motion.nav className="navbar">
        <NavLink to="/">
          <motion.div
            className="link"
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover={{
              boxShadow: 0,
              x: 4,
              y: 4,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Home
          </motion.div>
        </NavLink>
        <NavLink to="/shop">
          <motion.div
            className="link"
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: 0,
              x: 4,
              y: 4,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Shop
          </motion.div>
        </NavLink>
        <NavLink to="/cart">
          <motion.div
            className="link"
            initial={{
              opacity: 0,
              x: -300,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover={{
              boxShadow: 0,
              x: 4,
              y: 4,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Cart
          </motion.div>
        </NavLink>
        <NavLink to="/contact">
          <motion.div
            className="link"
            initial={{
              opacity: 0,
              x: -400,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            whileHover={{
              boxShadow: 0,
              x: 4,
              y: 4,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Contact
          </motion.div>
        </NavLink>
      </motion.nav>
      <nav className="mobile">
        <button onClick={() => setVisibleNav(!visibleNav)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <AnimatePresence>
          {visibleNav && (
            <motion.div
              initial={{
                x: -200,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -200,
              }}
            >
              <NavLink to={"/"}>
                <div className="mobile_link">Home</div>
              </NavLink>
              <NavLink to={"/shop"}>
                <div className="mobile_link">Shop</div>
              </NavLink>
              <NavLink to={"/cart"}>
                <div className="mobile_link">Cart</div>
              </NavLink>
              <NavLink to={"/contact"}>
                <div className="mobile_link">Contact</div>
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
