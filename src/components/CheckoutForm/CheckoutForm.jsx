import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CheckoutForm.module.css";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <div className={styles.contact}>
        <div>
          <h3>Contact Information</h3>
          <p>
            Already have an account? <span>Log in.</span>
          </p>
        </div>
        <input type="email" placeholder="Email" />
        <div className={styles.checkbox}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            Keep me up to date on news and exlusive offers.
          </label>
        </div>
      </div>
      <div className={styles.shipping}>
        <h3>Shipping Address</h3>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Company (Optional)" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Apartment, Suite, etc. (Optional)" />
        <input type="text" placeholder="City" />
        <div>
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Postal Code" />
        </div>
        <input type="text" placeholder="Phone (Optional)" />
      </div>
      <div className={styles.buttons}>
        <Link to={'/shop'}>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
          >
            <FontAwesomeIcon icon={faLessThan} />
            Return to shop
          </motion.button>
        </Link>
        <motion.button
          disabled
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
          Continue to shipping options
        </motion.button>
      </div>
    </form>
  );
};

export default CheckoutForm;
