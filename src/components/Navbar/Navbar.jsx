import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href='/'>
        <img src="./logo.png" alt="tehundred logo" />
      </a>
      <div className="links">
        <NavLink to={"/"}>
          <motion.div
            className="link"
            initial={{
              rotate: 0,
            }}
            whileHover={{
              rotate: -5,
            }}
          >
            Home
          </motion.div>
        </NavLink>
        <NavLink to={"/shop"}>
          <motion.div
            className="link"
            initial={{
              rotate: 0,
            }}
            whileHover={{
              rotate: -5,
            }}
          >
            Shop
          </motion.div>
        </NavLink>
        <NavLink to={"./cart"}>
          <motion.div
            className="link"
            initial={{
              rotate: 0,
            }}
            whileHover={{
              rotate: -5,
            }}
          >
            Cart
          </motion.div>
        </NavLink>
        <NavLink to={"./contact"}>
          <motion.div
            className="link"
            initial={{
              rotate: 0,
            }}
            whileHover={{
              rotate: -5,
            }}
          >
            Contact
          </motion.div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
